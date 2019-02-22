import express from 'express';

/// Configuration
const { port } = require('../config/config.js');

/// App Configuration
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world ... to my bitching app!');
});

app.listen(port, () =>
  console.log('Example app listening on port:' + port),
);

module.exports = app;