// DEPENDENCIES
const bcrypt = require('bcrypt');

// MODELS
const User = require('../../models/user');

// HELPERS
const { generateToken } = require('../helpers/jwt');

async function createUser(req, res) {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    const newUser = {
        ...user,
        password: hash,
    };
    try {
        const userFromDb = await User.createUser(newUser);
        res.status(200).json({
            message: 'User created succesfully',
            user: { ...userFromDb, password: '' },
        });
    } catch (error) {
        if (error.constraint === 'users_email_unique') {
            res.status(500).json({
                message: 'Email submited already exists in the database',
                error: error.message,
            });
        } else {
            res.status(500).json({
                message: 'There was an error',
                error: error.message,
            });
        }
    }
}

async function loginUser(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.getUserBy(email);
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = await generateToken(user);
            res.status(200).json({
                status: 'success',
                message: 'You are now logged in',
                token,
                user: {
                    ...user,
                    password: '',
                },
            });
        } else {
            res.status(500).json({
                status: 'fail',
                message: 'Invalid credentials',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: 'We could not log you in',
            error: error.message,
        });
    }
}

module.exports = {
    createUser,
    loginUser,
};
