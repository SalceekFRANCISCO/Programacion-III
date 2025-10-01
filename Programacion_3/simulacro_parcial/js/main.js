//Array de productos
const frutas = [
    {id: 1, nombre: "manzana", precio: 10, ruta_img: '../img/manzana.jpg'},
    {id: 2, nombre: "uva", precio: 30, ruta_img: '../img/uva.jpg'},
    {id: 3, nombre: "melon", precio: 50, ruta_img: '../img/melon.jpg'},
    {id: 4, nombre: "mango", precio: 70, ruta_img: '../img/fruta'},
    {id: 5, nombre: "frutilla", precio: 20, ruta_img: '../img/fruta'},
    {id: 6, nombre: "ananá", precio: 15, ruta_img: '../img/anana.png'},
];

//variables
let contenedorFrutas = document.querySelector('#contenerdorfrutas')

let barraBusqueda = document.querySelector("#barraBusqueda");

function mostrarProductos(){
    let cartaProducto = ""
    frutas.forEach(fruta => {
      cartaProducto += `
            <div class="card-producto">
                <img src="${fruta.ruta_img}" alt="${fruta.nombre}">
                <h3>${fruta.nombre}</h3>
                <p>$${fruta.precio}</p>
                <button>Agregar al carrito</button>
            </div> `;
    });
    contenedorFrutas.innerHTML = cartaProducto;
}

barraBusqueda.addEventListener("keyup", function(){
    let valorBusqueda = barraBusqueda.value;

    console.log(valorBusqueda);

    let productosFiltrados = frutas.filter(f => f.nombre.includes(valorBusqueda));
    
    console.table(productosFiltrados)
})

mostrarProductos();
