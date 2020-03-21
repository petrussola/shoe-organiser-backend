// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// HELPERS
const routes = require('./routes/routes');

// INSTANTIATE EXPRESS TO CREATE SERVER
const server = express();

// MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(express.json());

// ROUTER ENDPOINTS

server.use('/', routes);

module.exports = server;
