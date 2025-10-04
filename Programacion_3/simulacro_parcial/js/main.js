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

localStorage.clear();
//array de carrito
if (localStorage.getItem("carrito")){
    console.log("existe carrito");
}
else{
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
    
    // localStorage.setItem("carrito",JSON.stringify(carrito));

    mostrarCarrito();
}

function mostrarCarrito(){

    let cartaCarrito = '<ul>';
    carrito.forEach((elemento,indice) => {
        cartaCarrito += 
        `<li class="bloque-item">
            <p class="nombre-item">${elemento.nombre} - ${elemento.precio}</p>
            <p class="nombre-item">${indice}</p>
            <button class="boton-eliminar" onclick="eliminarElemento(${indice})">Eliminar</button>
        </li>`
    });

    cartaCarrito += "</ul> <button onclick='vaciarCarrito()'> Vaciar carrito </button>";

    console.log(cartaCarrito);

    console.table(carrito);

    contenedorCarrito.innerHTML = cartaCarrito;
    
}

function eliminarElemento(indice){
    console.log(`test de eliminado de indice ${indice}`)

    carrito.splice(indice,1);
                
    console.table(carrito); 

    mostrarCarrito();

}

function vaciarCarrito(){
    carrito = [];
    contenedorCarrito.innerHTML = cartaCarrito;
}

function init(){
    
    mostrarProductos(frutas);
    alerta();

}

init();



/*
LocalStorage: es una API que mpermite almcacernar datos de manera persistente en el navegador 
tiene un tramano maximo de 5 a 10 mp por dominio (url)

Metodos de LocalStorage:
1. guardar datos localStorage.setItem("value", "key")
2. leer datos localStorage.getItem("key")
3. eliminar un dato localStorage.removeItem("key")
4. eliminar todos los datos  localStorage.clear()


*/


localStorage.setItem("nombre","Gricel");

let localNombre = localStorage.getItem("nombre");

console.log(localNombre);

localStorage.setItem("tema","oscuro");

localStorage.removeItem("tema");

localStorage.clear();

console.log(carrito);

let jsonFruta = JSON.stringify(frutas);

console.log("array de objeto convertidos a texto plano");
console.log(jsonFruta);

let conversionFrutas = JSON.parse(jsonFrutas);

console.log("texto plano convertido a objeto js");
console.log(conversionFrutas);

