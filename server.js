const express = require('express');

const app = express();

const PORT = 9000;

app.get("/", (req, res) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})