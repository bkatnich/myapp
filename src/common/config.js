/**
 * config.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

/// Note: dotenv only works in development and is not picked up in production
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' })

/// In production the PORT variable is added on the command line.
/// Docker command line example: docker run -i -t -e PORT=3000 -p 3000:3000 076d420e52b1 
module.exports = {
  port: process.env.PORT
};