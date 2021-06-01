const express = require("express");
const app = express();
let palindrome = require("./utils/palindrome");
app.get("/check/:idWord", (req, res)=>{
    palabra = req.params.idWord;
    console.log("el req.params es: ", palabra);
    res.status(200).send(`<h1>${palindrome.palindrome(palabra)}<h1>`)

});

app.get("*", (req, res)=>{
    res.status(404).send("<h1>Error 404: No he encontrado lo que buscabas...</h1>");
});

app.listen(3000);