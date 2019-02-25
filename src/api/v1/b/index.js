/**
 * index.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

import express from 'express';

// Model must be required before the controller.
require('./b');

// Controller
const controller = require('./bController');

// Path at this point should be api/v1/b
let router = express.Router();
router.use('/b', controller);

module.exports = router;