const jwt = require('jsonwebtoken');

async function generateToken(user) {
    const payload = {
        email: user.email,
        name: user.name,
        id: user.id,
    };
    const options = {
        expiresIn: '5d',
    };
    try {
        const result = jwt.sign(payload, process.env.JWT_SECRET, options);
        return result;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    generateToken,
};
