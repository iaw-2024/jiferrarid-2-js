const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());


app.get("/express", (req, res) => res.send("Express on Vercel!"));
app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));
app.use(express.static('public'))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;