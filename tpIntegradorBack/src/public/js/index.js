// Seleccionamos el elemento al que le vamos a inyectar el HTML
let contenedorProductos = document.getElementById("contenedor-productos");
const url = "http://localhost:3000/productos"; // Guardamos en una variable la url de nuestro endpoint

async function obtenerProductos() {
    try {
        let respuesta = await fetch(url); // Hacemos una peticion a nuestro nuevo endpoint en http://localhost:3000/products

        let data = await respuesta.json();

        console.log(data); // Nuestros productos estan disponibles dentro de payload { payload: Array(19) }

        let productos = data.payload; // Aca guardamos en la variable productos el array de productos que contiene "payload"
        /* El output es el siguiente:
        [
            {
                "id": 1,
                "name": "hamburguesa impossible",
                "image": "https://burgernj.com/wp-content/uploads/2021/05/Impossible-Burger_.jpg",
                "category": "food",
                "price": "2000.00",
                "active": 1
            },
            {
                "id": 2,
                "name": "hamburguesa salmon",
                "image": "https://burgernj.com/wp-content/uploads/2021/05/Salmon-Burger_.jpg",
                "category": "food",
                "price": "2500.00",
                "active": 1
            }
        ]
        */

        mostrarProductos(productos);

    } catch(error) {
        console.error(error);
    }
}

function mostrarProductos(array) {
    console.table(array); // Recibimos correctamente en formato tabla los productos que nos manda la funcion obtenerProductos()

    let htmlProducto = "";

    array.forEach(producto => {
        htmlProducto += `
            <div class="card-producto">
                <img src="${producto.image}" alt="${producto.name}">
                <h5>${producto.nombre}</h5>
                <p>Id: ${producto.id}</p>
                <p>$${producto.precio}</p>
            </div>
        `;
    });

    contenedorProductos.innerHTML = htmlProducto;
}

function init() {
    obtenerProductos()
}

init();