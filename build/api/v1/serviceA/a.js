/**
 * a.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Schema
var ASchema = new _mongoose.default.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "missing required field"],
    minlength: 1,
    maxlength: 64
  },
  description: {
    type: String,
    maxlength: 256
  }
}, {
  timestamps: true
}); // Plugins

ASchema.plugin(_mongooseUniqueValidator.default, {
  message: 'is already taken.'
}); // To JSON

ASchema.methods.toJSONFor = function () {
  return {
    title: this.title,
    description: this.description,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

_mongoose.default.model('A', ASchema);