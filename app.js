const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
    res.send('Hello, World, DevOps!');
});

app.listen(port, () => {
    console.log(`Node.js app listening at http://localhost:${port}`);
});
