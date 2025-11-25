// fetch a localhost:3000/products/id -> el valor numerico del campo
let getProductos = document.getElementById("getProductos-form");
let listado_Productos = document.getElementById("listado-productos");

getProductos.addEventListener("submit", async (event) => {
    
    event.preventDefault();

    console.log(event.target);

    let formData = new FormData(event.target);
    console.log(formData);
    
    let data = Object.fromEntries(formData.entries());
    
    let idProducto = data.id; // ya extrajimos el valor del campo
    
    try{
        let response = await fetch(`http://localhost:3000/productos/${idProducto}`);

        console.log(response);

        let datos = await response.json();
        
        console.log(datos);

        let producto = datos.payload[0];
        console.log(producto);

        mostrarProducto(producto);
        
        }
    catch(error){
        console.log(error);
        
    }
    
});

/* Que es FormData?

En JavaScript, FormData es un objeto que permite crear un conjunto de pares clave-valor que representan los campos de un formulario HTML y sus valores, facilitando su envío a un servidor mediante métodos como fetch o XMLHttpRequest.
Este objeto replica la funcionalidad de un formulario HTML y se utiliza comúnmente para enviar datos de formularios, incluyendo archivos, de manera dinámica sin recargar la página

Este objeto es especialmente útil en aplicaciones modernas que requieren enviar datos de forma asincrónica, ya que simplifica el manejo de formularios, incluyendo campos de texto, casillas de verificación, botones de radio y campos de carga de archivos*/

function mostrarProducto(producto){
console.table(producto);

let htmlProducto = `
    <li class="li-listados">
        <img src="${producto.image}" alt="${producto.name}" class="img-listados">
        <p>Id: ${producto.id}/ Nombre: ${producto.name}/ <strong>Precio: $${producto.price}</strong></p>
    </li>
    `;
listado_Productos.innerHTML = htmlProducto;

}
