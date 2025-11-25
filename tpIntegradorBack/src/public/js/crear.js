let altaProducts_form = document.getElementById("altaProducts_form");

altaProducts_form.addEventListener("submit", async event =>{
    
    event.preventDefault();

    let formData = new FormData(event.target);

    let data = Object.fromEntries(formData.entries());

    console.log(data);

    console.log(JSON.stringify(data));
    
    enviarProducto(data);
})


async function enviarProducto(data){
    console.table(data);

    try{
        let response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        let result = await response.json();

        if(response.ok){
            console.log(result.message);
            alert(result.message);
        }
        else{
            console.error(result.message);
            alert(result.message)
            
        }


    } catch(error){
        console.log("Error al enviar los datos: ", error);
        alert("Error al procesar la solicitud")
    }
}
