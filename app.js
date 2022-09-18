const express = require("express");
const path = require ("path");

const app = express();

app.get('/carrito-compras', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/carrito.html'));  // Permite enviar un archivo HTML
});

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(3012, () =>{
    console.log("servidor corriendo en el puerto 3012");
}); 