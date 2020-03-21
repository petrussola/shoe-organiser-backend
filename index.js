// SERVER
const server = require('./api/server');

// DEPENDENCIES
require('dotenv').config();

const port = process.env.PORT;

server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
});
