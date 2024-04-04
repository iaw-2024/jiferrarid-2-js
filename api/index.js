const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

const m1=require('../public/express/index.js');

app.get("/express", (req, res) => res.send("Express on Vercel!"));
app.get("/cliente_servidor", (req, res) =>  m1(req, res))
app.use(express.static('public'))



app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;