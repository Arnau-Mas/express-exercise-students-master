const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.status(200).send("<h1>El servidor funciona correctamente</h1>");
});

app.get("/anadir", (req, res)=>{
    res.status(200).send("<h1>Estas en anadir</h1>");
});

app.get("*", (req, res)=>{
    res.status(404).send("<h1>Error 404: Esta pagina no funciona</h1>");
});

app.listen(3000);