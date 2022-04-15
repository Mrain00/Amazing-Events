//Creamos la funcion para mostrar las cardBuscadas
var arr = []
async function obtenerEventos() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
        .then(response => response.json())
        .then(json => arr.push(...json.eventos))


        var id = 1
        arr.map(events =>events.id = id++)



        var id = location.search.split("?id=").filter(Number)
        var selectedId = Number(id[0])
        console.log(selectedId)
        var evento = arr.find(function(evento) {
        return evento.id == selectedId
    })
    var html = `    
            <article class="article"> 
                <h3>${evento.name}</h3>
                <p>Descripción: ${evento.description}</p>
                <img src="${evento.image}">
                <p>Categoría: ${evento.category}</p>
                <p>Fecha: ${evento.date}</p>
                <p>Lugar: ${evento.place}</p>
                <p>Capacidad: ${evento.capacity}</p>
                <p>Asistieron: ${evento.assistance}</p>
                <p>Precio: $${evento.price}</p>
                </article>
    `
    document.querySelector("#mainCards").innerHTML = html
}
obtenerEventos()