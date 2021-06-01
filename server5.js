const express = require("express");
const app = express();
let palindrome = require("./utils/palindrome");


app.use((req, res, next)=>{ //aixo es un middleware per obtenir la querystring, ja que aixi, tenim la querystring globalitzada i utiulitzar-lo a tots els app.get q vulguis
    let querystring = req.url.split("?")[1];
    req.miquerystring = url; //aqui afegim a req. l'objecte miquerystring, perque req es un objecte i se li pot afegir el q vulguis
})

app.get(/* "/check/" */, (req, res)=>{
    /* palabra = req.params.idWord; */
    console.log("el req.params es: ", palabra);
    console.log("el url es: ", url)
    res.status(200).send(`<h1>${palindrome.palindrome(palabra)}<h1>`)

});

app.get("*", (req, res)=>{
    res.status(404).send("<h1>Error 404: No he encontrado lo que buscabas...</h1>");
});

app.listen(3000);