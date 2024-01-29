// Create web server and listen for requests
// 1. Create web server
// 2. Listen for requests
// 3. Handle requests
// 4. Send response

// 1. Create web server
const express = require('express');
const app = express();

// 3. Handle requests
// GET
// http://localhost:3000/api/comments
app.get('/api/comments', (req, res) => {
    res.send('GET comments');
});

// POST
// http://localhost:3000/api/comments
app.post('/api/comments', (req, res) => {
    res.send('POST comments');
});

// PUT
// http://localhost:3000/api/comments/1
app.put('/api/comments/:id', (req, res) => {
    res.send('PUT comments');
});

// DELETE
// http://localhost:3000/api/comments/1
app.delete('/api/comments/:id', (req, res) => {
    res.send('DELETE comments');
});

// 2. Listen for requests
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));