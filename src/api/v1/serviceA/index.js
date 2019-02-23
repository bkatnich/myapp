/**
 * index.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

import express from 'express';

// Model must be required before the controller.
require('./A');

// Controller
const controller = require('./aController');

// Path at this point should be api/v1/a
let router = express.Router();
router.use('/a', controller);

module.exports = router;