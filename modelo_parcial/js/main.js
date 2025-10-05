// <!-- Enunciado:
// Una biblioteca digital necesita un sistema web sencillo para mostrar y gestionar sus libros.
// Sigue los siguientes pasos:

// Crea un array de objetos llamado libros. 
// Cada objeto debe representar un libro con: id, titulo, autor, precio y ruta_img.

// Muestra los libros en pantalla en formato de tarjetas (imagen, título, autor y precio).

// Agrega un input de búsqueda que permita filtrar los libros por título o autor.

// Añade un botón en cada tarjeta que permita agregar un libro a una lista de “favoritos”.

// Cada vez que se agregue un libro a favoritos, muéstralo en consola y asegúrate de que no se repita.
// Implementa una función init() que inicialice la aplicación mostrando todos los libros.

// variables
let contenedor_libros = document.querySelector("#seccionlibros");

//array de botones
const libros = [
    {id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', precio: 8500, ruta_img: 'img/cien_anos_de_soledad.jpg'},
    {id: 2, titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', precio: 5200, ruta_img: 'img/el_principito.jpg'},
    {id: 3, titulo: '1984', autor: 'George Orwell', precio: 6900, ruta_img: 'img/1984.jpg'},
    {id: 4, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', precio: 9700, ruta_img: 'img/don_quijote.jpg'},
    {id: 5, titulo: 'Fahrenheit 451', autor: 'Ray Bradbury', precio: 6400, ruta_img: 'img/fahrenheit_451.jpg'},
    {id: 6, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', precio: 7100, ruta_img: 'img/orgullo_y_prejuicio.jpg'},
    {id: 7, titulo: 'Crimen y castigo', autor: 'Fiódor Dostoyevski', precio: 9300, ruta_img: 'img/crimen_y_castigo.jpg'},
    {id: 8, titulo: 'El señor de los anillos', autor: 'J. R. R. Tolkien', precio: 11800, ruta_img: 'img/el_senor_de_los_anillos.jpg'},
    {id: 9, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', precio: 7800, ruta_img: 'img/la_sombra_del_viento.jpg'}
];


let listadoLibros= "";

// formato de tarjetas (imagen, título, autor y precio).
// <button> hace click</button>
function mostrarListaBotones(array){
    let listadoLibros= "<ul class=lista> ";
    array.forEach(libro => {
        listadoLibros += 
        `<li id=botonera2>
            <img src=${libro.ruta_img} alt="${libro.titulo}">
            <h2>${libro.titulo}</h2>
            <h5>${libro.autor}</h5>
            <p id=precio>$${libro.precio}</p>
        </li>`;
    });
    listadoLibros += "</ul>";
    contenedor_libros.innerHTML = listadoLibros;
    
}

function desaparecerListaBotones(){
    contenedor_libros.innerHTML = "";
    
}

function clickearMostrar(){
    boton1.addEventListener("click", mostrarListaBotones(libros))
}

function desaparecerMostrar(){
    boton2.addEventListener("click", desaparecerListaBotones)
}

function alerta(){
    console.log("holis");
}

function init(){
    mostrarListaBotones(libros); 
    // alerta();
    // clickearMostrar();
    // desaparecerMostrar();
}

init();
