const express = require("express");

const app = express();

app.get("/mensaje", (req, res)=>{
    res.status(200).send("<h1>El servidor funciona correctamente</h1>");
});
app.get("*", (req, res)=>{
    res.status(404).send("<h1>Error 404: No he encontrado lo que buscabas...</h1>");
});

app.listen(3000);