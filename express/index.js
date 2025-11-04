import express from "express";
const app = express(); //se guarda una instancia de la aplicacion express

const PORT = 3100;

app.get("/", (req,res) => {
    res.send("hola mundo");
})

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
    
})