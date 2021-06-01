const express = require("express");
const app = express();
const path = require("path");

app.get("/nacktschnecke", (req, res)=>{
    const ruta=path.join(__dirname, "server3-files", "nacktschnecke.html");
    res.status(200).sendFile(ruta);
});

app.get("/about", (req, res)=>{
    const ruta=path.join(__dirname, "server3-files", "about.html");
    res.status(200).sendFile(ruta);
});

app.get("*", (req, res)=>{
    res.status(404).send("<h1>Error 404: No he encontrado lo que buscabas...</h1>");
});

app.listen(3000);