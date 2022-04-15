var inputSearch = document.querySelector("#searchInput")           /* CAPTURO ELEMENTOS HTML */
var checkboxSelected = document.querySelector("#select")
//Creamos la funcion para mostrar las cardBuscadas
var arr = []
async function obtenerEventos() {
    await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
        .then(response => response.json())
        .then(json => { arr.push(...json.eventos) })
    mostrarEvento()
}
obtenerEventos()
//VINCULAMOS JSON CON EL ARREGLO VACIO//
function filtrarEvento(event) {
    var val = event.target.value
    var data = arr.filter(event => event.name.toLowerCase().includes(val.toLowerCase()))
    console.log(data)
    mostrarEvento(data);
}
function selected(event) {
    var val = event.target.value
    console.log(val)
        var select = arr.filter(event => event.category == val)
        mostrarEvento(select)
    }
function mostrarEvento(data) {
    var arr2 = []
    if (data == undefined) {
        arr2.push(...arr)
        console.log(arr2)
    }
    else {
        arr2.push(...data)
    }
    var html = ""
    arr2.map(events => {
        html += `    
        <article id="mainCards" class="article">
        <h3><a href="./detalles.html?id=${events.id}">${events.name}</a></h3>
        <p>${events.description}</p>
        <a href="./detalles.html?id=${events.id}"><img src="${events.image}"></a>
        <p>${events.category}</p>
        <p>Fecha: ${events.date}</p>
        <p>Lugar: ${events.place}</p>
        </article>
                `
    })
    document.querySelector('#mainCards').innerHTML = html
}

checkboxSelected.addEventListener("change", selected)
inputSearch.addEventListener("keyup", filtrarEvento)
        /* select.addEventListener("change", function()) */