// DEPENDENCIES
const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.json('hello');
});

const port = 5000;

server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
});
