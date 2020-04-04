// DEPENDENCIES
const jwt = require('jsonwebtoken');

// checks if jwtoken is valid and extracts the user id
function isUserAuthorized(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                // if there is an error verifying jwt, return an error
                res.status(401).json({
                    status: 'fail',
                    message: 'Invalid credentials',
                });
            } else {
                // if token is correct, decode the User id and continue onto the next service
                req.userId = decodedToken.id;
                next();
            }
        });
    } else {
        // if no token was provided on the header, return error
        res.status(400).json({
            status: 'fail',
            message: 'No credentials provided',
        });
    }
}

module.exports = {
    isUserAuthorized,
};
