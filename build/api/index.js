/**
 * index.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Path at this point should be /api
var router = _express.default.Router();

router.use('/api', require('./v1'));
router.get('/api', function (req, res) {
  res.send('Hey there ... you are in my api directory');
});
module.exports = router;