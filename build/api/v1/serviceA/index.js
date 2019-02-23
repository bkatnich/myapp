/**
 * index.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Model must be required before the controller.
require('./A'); // Controller


var controller = require('./aController'); // Path at this point should be api/v1/a


var router = _express.default.Router();

router.use('/a', controller);
module.exports = router;