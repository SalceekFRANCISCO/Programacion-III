// Enunciado:
// Una biblioteca digital necesita un sistema web sencillo para mostrar y gestionar sus libros.
// Sigue los siguientes pasos:

// Crea un array de objetos llamado libros. Cada objeto debe representar un libro con: id, titulo, autor, precio y ruta_img.

// Muestra los libros en pantalla en formato de tarjetas (imagen, título, autor y precio).

// Agrega un input de búsqueda que permita filtrar los libros por título o autor.

// Añade un botón en cada tarjeta que permita agregar un libro a una lista de “favoritos”.

// Cada vez que se agregue un libro a favoritos, muéstralo en consola y asegúrate de que no se repita.
// Implementa una función init() que inicialice la aplicación mostrando todos los libros.

//array de productos
const frutas = [
  { id: 1, nombre: "manzana", precio: 10, ruta_img: "img/manzana.jpg" },
  { id: 2, nombre: "uva", precio: 30, ruta_img: "img/uvas.jpg" },
  { id: 3, nombre: "melón", precio: 50, ruta_img: "img/melon.jpg" },
  { id: 4, nombre: "mango", precio: 70, ruta_img: "img/mango.jpg" },
  { id: 5, nombre: "frutilla", precio: 20, ruta_img: "img/frutilla.jpg" },
  { id: 6, nombre: "ananá", precio: 15, ruta_img: "img/anana.png" },
];

//variables
let contenedorFrutas = document.querySelector("#contenedorFrutas");

let contenedorCarrito = document.querySelector("#contenedorCarrito");

let barraBusqueda = document.querySelector("#barraBusqueda");

//localStorage.clear();

//array de carrito
if (localStorage.getItem("carrito")){
    console.log("existe carrito");
}else{
    console.log("no existe carrito");
}

let carrito = [];

function mostrarProductos(array) {
  let cartaProducto = "";
  array.forEach((fruta) => {
    cartaProducto += `
            <div class="card-producto">
                <img src="${fruta.ruta_img}" alt="${fruta.nombre}" />
                <h3>${fruta.nombre}</h3>
                <p>$ ${fruta.precio}</p>
                <button onclick="agregarACarrito(${fruta.id})">Agregar al carrito</button>
            </div> `;
  });
  contenedorFrutas.innerHTML = cartaProducto;
}

barraBusqueda.addEventListener("keyup", () => {
    filtrarProductos();
    alerta();
});

function alerta(){
    console.log("holis");
}

function filtrarProductos(){
    let valorBusqueda = barraBusqueda.value;

    console.log(valorBusqueda);

    let productosFiltrados = frutas.filter(f => f.nombre.includes(valorBusqueda));

    mostrarProductos(productosFiltrados);
}

function agregarACarrito(id){

    let frutaSeleccionada = frutas.find(f => f.id === id);

    carrito.push(frutaSeleccionada);

    console.log(carrito);

    console.log(`id del producto: ${id}`);

    //localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}

function mostrarCarrito(){

    let cartaCarrito = "<ul>";
    carrito.forEach((elemento, indice) => {
        cartaCarrito +=
        `<li class="bloque-item">
            <p class="nombre-item">${elemento.nombre} - $ ${elemento.precio}</p>
            <p class="nombre-item">${indice}</p>
            <button class="boton-eliminar" onclick="eliminarElemento(${indice})">Eliminar</button>
        </li>`
        
    });

    cartaCarrito += "</ul><button onclick='vaciarCarrito()'> Vaciar carrito </button>";

    contenedorCarrito.innerHTML = cartaCarrito;

    console.log(cartaCarrito);

    console.table(carrito);
}

function eliminarElemento(indice){
    console.log(`test de eliminado de indice ${indice}`);

    carrito.splice(indice, 1);

    console.table(carrito);

    mostrarCarrito();
    
}

function vaciarCarrito(){
    carrito = [];

    contenedorCarrito.innerHTML = "";
}

function init(){
    
    mostrarProductos(frutas);
    alerta();

}

init();

/*
localStorage : es una API que permite almacenar datos de manera persistente en el navegador
tiene un tamaño máximo de 5 a 10mb por dominio (url)

Métodos de localStorage :
1. Guardar datos: localStorage.setItem(key, value)
2. Leer datos: localStorage.getItem(key)
3. Eliminar un dato: localStorage.removeItem(key)
4. Eliminar todos los datos: localStorage.clear()

JSON o JavaScript Object Notation

Es un formato de texto plano donde transformamos nuestros objetos JS 
en un string y es el lenguaje standard para enviar y recibir datos por internet

*/

localStorage.setItem("nombre","Gricel");

let localNombre = localStorage.getItem("nombre");

console.log(localNombre);

localStorage.setItem("tema","oscuro");

localStorage.removeItem("tema");

localStorage.clear();

console.log(frutas);

let jsonFrutas = JSON.stringify(frutas);

console.log("array de objetos convertido a texto plano");
console.log(jsonFrutas);

let conversionFrutas = JSON.parse(jsonFrutas);

console.log("texto plano convertido a objeto js");
console.log(conversionFrutas);



