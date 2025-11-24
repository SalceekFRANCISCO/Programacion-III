import { Router } from "express"; // Importamos el middleware Router
const router = Router(); // Lo mismo que hacemos en express con const app = express()

import { validateId } from "../middlewares/middlewares.js"; // Importamos validateId
import connection from "../database/db.js"; // Traemos la conexion a la BBDD
import { createProduct, removeProduct, getAllProducts, getProductById, modifyProduct, updateProduct } from "../controllers/product.controlers.js";


// GET all products -> Traer todos los productos
router.get("/", getAllProducts);


// GET product by id -> Consultar producto por id
router.get("/:id", validateId , getProductById)


// POST -> Crear nuevo producto
router.post("/", createProduct);


// PUT-> Actualizar producto
router.put("/", modifyProduct);


// DELETE-> Eliminar producto
router.delete("/:id", validateId, removeProduct);


// Exportamos todas las rutas
export default router;