// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// INSTANTIATE EXPRESS TO CREATE SERVER
const server = express();

// MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(express.json());

// ENDPOINTS

server.get('/', (req, res) => {
    res.status(200).json({ message: 'hello' });
});

module.exports = server;
