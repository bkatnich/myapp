/**
 * b.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

// Schema
const BSchema = new mongoose.Schema({
    title: { type: String, 
        unique: true,
        required: [true, "missing required field"],
        minlength: 1, 
        maxlength: 64},
    description: { type: String, 
        maxlength: 256}    
}, {timestamps: true});

// Plugins
BSchema.plugin(mongooseUniqueValidator, {message: 'is already taken.'});

// To JSON
BSchema.methods.toJSONFor = function() {
    return {
        title: this.title,
        description: this.description,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    };
};
  
mongoose.model('B', BSchema);