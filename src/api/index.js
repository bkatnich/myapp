/**
 * index.js
 *
 * Created by Britton Katnich on February 16th, 2019.
 * Copyright © 2018 Britton Katnich. All rights reserved.
 */
'use strict';

import express from 'express';

// Path at this point should be /api
let router = express.Router();
router.use('/api', require('./v1'));

router.get('/api', (req, res) => {
    res.send('Hey there ... you are in my api directory');
});

module.exports = router;