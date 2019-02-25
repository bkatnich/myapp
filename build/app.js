/**
 * app.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

require("@babel/polyfill");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _winston = _interopRequireDefault(require("winston"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/// Configuration
var _require = require('./common/config.js'),
    port = _require.port; /// Logger


var _require2 = require('./common/logger.js'),
    configureLogger = _require2.configureLogger;

configureLogger(); /// App Configuration

var app = (0, _express.default)(); // App: Middleware

app.use((0, _cors.default)()); // App: Routes & Models

app.use(require('./api'));
app.get('/', function (req, res) {
  res.send('Hey there ... to my bitching app!');
}); // App: Start Listening

app.listen(port, function () {
  return _winston.default.info('MyApp listening on port:' + port);
});
module.exports = app;