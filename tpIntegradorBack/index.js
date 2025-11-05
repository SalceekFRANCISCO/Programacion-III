import express from "express";
const app = express();

import enviroments from "./src/api/config/environments.js";
const PORT = enviroments.port;

app.get("/",(req,res) => {
    res.send("hola mundo desde express.js")
});

app.listen(PORT, ()=>{
    console.log(`servidor corriendo desde el puerto ${PORT}`)
});


