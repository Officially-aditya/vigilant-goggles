const express = require('express');
const path = require('path');
const app = express();

app.get('/route', (req, res) => {
    console.log('Received request for /route');
    res.sendFile(path.join(__dirname, '..', 'route.json'));
});

app.use(express.static(path.join(__dirname, '..', 'client')));

module.exports = app;
