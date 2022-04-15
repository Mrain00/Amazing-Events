//Creamos la funcion para mostrar las cardBuscadas
var arr = []
var fechaActual = ""
var pasados = []
async function obtenerEventos() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
        .then(response => response.json())
        .then(json => {
            fechaActual = json.fechaActual
            arr.push(...json.eventos.filter(fechas => fechas.date > fechaActual))
            pasados.push(...json.eventos.filter(fechas => fechas.date < fechaActual))
        })
    var futurosToDisplay = arr.slice(0, 2)
    var pasadosToDisplay = pasados.slice(0, 2)
    mostrarEventos(futurosToDisplay)
    mostrarEventosPasados(pasadosToDisplay)
}//VINCULAMOS JSON CON EL ARREGLO VACIO//
obtenerEventos()

function mostrarEventos(futurosToDisplay) {
    var arr2 = futurosToDisplay
    var html = ""
    arr2.map(events => {
        html += `    
        <article class="article-1-1">
        <a href="./detalles.html?id=${events.id}"><h3>${events.name}</h3></a>
                <p>${events.date} ${events.place}</p>
                <p>${events.category}</p>
                <a href="./detalles.html?id=${events.id}"><img src="${events.image}"></a>
        </article>
        `
    })
    console.log(futurosToDisplay)
    document.getElementById("mainFuturos").innerHTML = html
}
function mostrarEventosPasados(pasadosToDisplay) {
    var arr2 = pasadosToDisplay
    var html = ""
    arr2.map(eventos => {
        html += `    
        <article class="article-1-1">
        <a href="./detalles.html?id=${eventos.id}"><h3>${eventos.name}</h3></a>
                <p>${eventos.date} ${eventos.place}</p>
                <p>${eventos.category}</p>
                <a href="./detalles.html?id=${eventos.id}"><img src="${eventos.image}"></a>
        </article>
        `
    })
    console.log(pasadosToDisplay)
    document.getElementById("mainPasados").innerHTML = html
}
