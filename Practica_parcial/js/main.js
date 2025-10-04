let boton1 = document.querySelector("#boton1id");
console.log(boton1.textContent);

//#region pruebas
boton1.textContent = "te odiooooooooooooooo";

// boton1.innerHTML = "<h> hello thereeeee </h> "

boton1.style.backgroundColor = "white";

boton1.style.padding = "10px";
boton1.style.margin = "10px";
//#endregion


let contenedor_botones = document.querySelector("#botonera");

//array de botones
let arrayBotones = [
    {boton_nombre:"boton1", texto:"tocame 1"},
    {boton_nombre:"boton1", texto:"tocame 2"},
    {boton_nombre:"boton1", texto:"tocame 3"},
]

// <button> hace click</button>
function apretarBoton(){
    let vacio= "";
    arrayBotones.forEach(boton => {
        vacio += ` 
            <div class="prueba"> 
                <p>${boton.boton_nombre}</p>
                <h6>${boton.texto}</h6>
                </div>`
    });
    contenedor_botones.innerHTML = vacio;
    console.log("me active");
    
}

function alerta(){
    console.log("holis");
}

function init(){
    apretarBoton();
    alerta();
}

init()
