const express = require('express');
const path = require('path');
const app = express();
const publicUrl = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicUrl));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicUrl, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
});