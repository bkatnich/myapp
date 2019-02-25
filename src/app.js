/**
 * app.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

import "@babel/polyfill";
import cors from 'cors'
import express from 'express';
import winston from 'winston'

/// Configuration
const { port } = require('./common/config.js');

/// Logger
const { configureLogger } = require('./common/logger.js');
configureLogger();

/// App Configuration
const app = express();

    // App: Middleware
    app.use(cors());

    // App: Routes & Models
    app.use(require('./api'));

app.get('/', (req, res) => {
    res.send('Hey there ... welcome to myapp 3!');
});

// App: Start Listening
app.listen(port, () =>
  winston.info('MyApp listening on port:' + port),
);

module.exports = app;