// DEPENDENCIES
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const server = express();
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.json('hello');
});

const port = process.env.PORT;

server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
});
