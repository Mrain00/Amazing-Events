//Creamos la funcion para mostrar las cardBuscadas
var arr = []
var fechaActual = ""
async function obtenerEventos() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
        .then(response => response.json())
        .then(json => {
            fechaActual = json.fechaActual
            arr.push(...json.eventos.filter(fechas => fechas.date > fechaActual))
          /*   var id = 1
            arr.map(events=> events.id = id++)
            console.log(arr)
            var */
        })
    mostrarEventos(arr)
}//VINCULAMOS JSON CON EL ARREGLO VACIO//
obtenerEventos()
function mostrarEventos(arr) {
    var arr2 = arr
    var html = ""
    arr2.map(events => {
        html += `    

        <article id="mainCards" class="article">
        <h3><a href="./detalles.html?id=${events.id}">${events.name}</a></h3>
        <p>${events.description}</p>
        <a href="./detalles.html?id=${events.id}"><img src="${events.image}"></a>
        <p>Categoría: ${events.category}</p>
        <p>Fecha: ${events.date}</p>
        <p>Lugar: ${events.place}</p>
        <p>Capacidad: ${events.capacity}</p>
        <p>Precio: $${events.price}</p>
        </article>

        `
    })
    console.log(arr)
    document.getElementById("mainCards").innerHTML = html
}
