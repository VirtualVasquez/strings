const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello There!");
})

app.listen(port, () => {
    console.log(`exapmle app listening on port ${port}`)
})
