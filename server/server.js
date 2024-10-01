const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.get('/route', (req, res) => {
    console.log('Received request for /route');
    res.sendFile(path.join(__dirname, '..', 'route.json'));
});


app.use(express.static(path.join(__dirname, '..', 'client')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
