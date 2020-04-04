const jwt = require('jsonwebtoken');

function isUserAuthorized(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.status(401).json({
                    status: 'fail',
                    message: 'Invalid credentials',
                });
            } else {
                req.userId = decodedToken.id;
                next();
            }
        });
    } else {
        res.status(400).json({
            status: 'fail',
            message: 'No credentials provided',
        });
    }
}

module.exports = {
    isUserAuthorized,
};
