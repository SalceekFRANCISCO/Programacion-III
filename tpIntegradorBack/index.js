import express from "express";
const app = express();

import enviroments from "./src/api/config/environments.js";
import connection from "./src/api/database/db.js";
const PORT = enviroments.port;

app.get("/",(req,res) => {
    res.send("hola mundo desde express.js")
});


/*==================================================
ENDPOINTS
==================================================*/
app.get("/",(req, res)=>{
    res.send("TP integrador Div 132");
})


app.get("./productos", async(req, res)=>{
    try{
        const sql = "SELECT * FROM PRODUCTOS"
        
        // la conexion devuelve dos campos
        const [rows, fields] = await connection.query(sql);
        
        res.status(200).json({
            payload: rows
        });
        
    }
    catch(error){
        console.log("Error obteniendo productos"+error.message);
        
        res.status(500).json({
            message: "error al intentar obtener productos"
        })
        
    }

});


app.listen(PORT, ()=>{
    console.log(`servidor corriendo desde el puerto ${PORT}`)
});