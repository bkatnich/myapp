/**
 * index.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Path at this point should be api/v1
var router = _express.default.Router();

router.use('/v1', require('./serviceA'));
router.get('/v1', function (req, res) {
  res.send('Hey there ... you are in my api/v1 directory');
});
module.exports = router;