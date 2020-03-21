module.exports = {
    testEndpoint(req, res) {
        res.status(200).json({ message: 'hello' });
    },
};
