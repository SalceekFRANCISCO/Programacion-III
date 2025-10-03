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

//array de carrito
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

    mostrarCarrito();
}

function mostrarCarrito(){
// {/* <li class="bloque-item">
// <p class="nombre-item">nombreProducto - precioProducto</p>
// <button class="boton-eliminar">Eliminar</button>
// </li> */}
    let cartaCarrito = '';

    console.table(carrito);
}

function init(){
    
    mostrarProductos(frutas);
    alerta();

}

init();
