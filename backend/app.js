const express = require('express');
const app = express();
const router = require('./routes');
const cors = require('cors');

function logRequest({method, url}, _, next) {
    console.log(`[${new Date().toLocaleString()}] ${method} ${url}`);
    next();
}

app.use(cors());
app.use(express.json());
app.use(logRequest);
app.use('/api', router);

module.exports = app;
