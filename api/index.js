const express = require("express")
const cors = require('cors')
const path = require('path')
const fs = require('fs')
const app = express()
app.use(cors())
const generateComment=require('../public/express/index.js')
var staticData
const staticDatafilePath=path.join(__dirname, '../public/express/expressComments.txt');
try { 
    staticData=fs.readFileSync(staticDatafilePath,'utf8')
} catch (err) {
    staticData={}
    console.error(err)
}
app.set("view engine","pug")
app.get("/express", (req, res) => {
    res.render("index",JSON.parse(staticData))
});
app.get("/cliente_servidor", (req, res) => {
    let comment=generateComment()
    res.json(comment)
});
app.use(express.static('public'))
app.listen(3001, () => console.log("Server ready on port 3001."))
module.exports = app
