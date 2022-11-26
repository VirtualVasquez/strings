const express = require('express');
const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Hello There!");
})


    // http://localhost:3001/api/name
app.get("/api/name", (req, res) => {

})

app.listen(port, () => {
    console.log(`exapmle app listening on port ${port}`)
})
