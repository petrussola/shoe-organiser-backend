// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// HELPERS
const routes = require('./routes/routes');
const authRoute = require('./routes/authroute');

// INSTANTIATE EXPRESS TO CREATE SERVER
const server = express();

// MIDDLEWARE
server.use(helmet());
server.use(cors());
server.use(express.json());

// ROUTE ENDPOINTS
server.use('/', routes);
server.use('/api/auth', authRoute);

// ROUTE ERROR FALLBACK
// server.use(function errors(err, req, res) {
//     return res.status(500).json({ err });
// });

module.exports = server;
