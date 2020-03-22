// DEPENDENCIES
const bcrypt = require('bcrypt');

// MODELS
const User = require('../../models/user');

function createUser(req, res) {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    const newUser = {
        ...user,
        password: hash,
    };
    User.createUser(newUser)
        .then(data => {
            res.status(200).json({
                message: 'User created succesfully',
                user: { ...data, password: '' },
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'There was an error',
                error: error.message,
            });
        });
}

module.exports = {
    createUser,
};
