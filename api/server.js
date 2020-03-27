// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// HELPERS
const authRoute = require('./routes/authroute');
const boxRoute = require('./routes/boxroute');

// INSTANTIATE EXPRESS TO CREATE SERVER
const server = express();

// MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(express.json());

// ROUTE ENDPOINTS
server.use('/api/auth', authRoute);
server.use('/api/box', boxRoute);

// ROUTE ERROR FALLBACK
// server.use(function errors(err, req, res) {
//     return res.status(500).json({ err });
// });

module.exports = server;
