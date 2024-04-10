const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

const generateComment=require('../public/express/index.js');

app.set("view engine","pug")

app.get("/express", (req, res) => {
    let comment=generateComment()
    res.render("index",{
        user1:"Hello",comment1:"Hello world!",
        user2:"Hello",comment2:"Hello world!",
        user3:"Hello",comment3:"Hello world!"    
    })
});
app.get("/cliente_servidor", (req, res) => {
    let comment=generateComment()
    res.json(comment)
});
app.use(express.static('public'))



app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;
