const config = require("./config/config.json");
const express = require("express");
var path = require("path");

var app = express();

var port = process.env.PORT || config.node_port || 3000;

// Motor de plantillas. (1) Donde ('views') (2) Que tipo 'ejs'
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.set(express.static('/public'));

var usuario = {
    nombre: "Jorge",
    perfil: "otro"
}

var items=[
    {name:'node.js', url: "https://nodejs.org/en"},
    {name:'ejs', url: "https://ejs.co"}

];

app.get("/", (req,res)=>{
    res.render('pages/home',{usuario})
})

app.get("/contact", (req,res)=>{
    res.render('pages/contact', {items})
})


app.listen(port, ()=>{
    console.log(`Server up in port: ${port}`)
})