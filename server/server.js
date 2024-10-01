const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/route', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'route.json')); // Adjust if needed
});

app.use(express.static(path.join(__dirname, '..', 'client')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
