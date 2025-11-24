import connection from "../database/db.js";


const selectAllProducts =  () => {
    const sql = "SELECT * FROM products";
    
    // la conexion devuelve dos campos, rows con el resultado de la consulta, fields la informacion de la tabla products
    return connection.query(sql);
}

const selectProductById =  (id) =>{
    // Optimizacion 2: Limitar los resultados de la consulta: Evita el escaneo completo de la tabla
    //let sql = "SELECT * FROM products WHERE products.id = ? LIMIT 1";

    const sql = "SELECT FROM products WHERE productos.id = ?";
    
    // la conexion devuelve dos campos, rows con el resultado de la consulta, fields la informacion de la tabla products
    return connection.query(sql,[id]);
}

const insertProduct = (name, image, category, price) => {

    let sql = "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)";

    return connection.query(sql, [name, image, category, price]);
}

const updateProduct = (name, image, category, price, active, id) => {
    let sql = `
            UPDATE products
            SET name = ?, image = ?, category = ?, price = ?, active = ?
            WHERE id = ?
        `;

    return connection.query(sql, [name, image, category, price, active, id]); // Estos valores en orden reemplazan a los placeholders -> ?

}

const deleteProduct = (id) => {
    let sql = `DELETE FROM products WHERE id = ?`;

    return connection.query(sql, [id]);

}


export default{
    selectAllProducts,
    selectProductById,
    insertProduct,
    updateProduct,
    deleteProduct,

}