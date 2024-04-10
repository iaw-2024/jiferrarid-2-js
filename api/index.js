const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

const generateComment=require('../public/express/index.js');

app.get("/express", (req, res) => {
    let comment=generateComment()
    res.send(comment.name+" "+comment.comment)
});
app.get("/cliente_servidor", (req, res) => {
    let comment=generateComment()
    res.json(comment)
});
app.use(express.static('public'))



app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
