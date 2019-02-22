/**
 * config.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' })

module.exports = {
  port: process.env.PORT
};