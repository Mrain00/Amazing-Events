var eventos = [];
var allCategorias = []
var eventoPasados=[]
var infoTotal=[]
var mayorPorcentaje = document.getElementById("mayorAudiencia")
var menorPorcentaje = document.getElementById("menorAudiencia")
var mayorCapacidad = document.getElementById("mayorCapacidad")
async function getData() {
  await fetch("https://amazingeventsapi.herokuapp.com/api/eventos")
    .then((response) => response.json())
    .then((json) => {
      eventos.push(...json.eventos);
      fechaPresente = json.fechaActual

    });
    tablaDeCategorias()
    porcentajeAsistecia(eventos)
    mayorPorCapacidad(eventos)
  };
getData();
function porcentajeAsistecia(){
  var arr = []
  arr.push(...eventos.filter(evento=> evento.assistance != undefined))
  arr.map(element=>{ element.datoporcentaje = (element.assistance * 100) / element.capacity })
  arr.sort((a, b)=> b.datoporcentaje - a.datoporcentaje)
  console.log(arr)
  mayorPorcentaje.innerHTML += arr[0].datoporcentaje.toFixed(2)
  menorPorcentaje.innerHTML += arr[arr.length-1].datoporcentaje.toFixed(2)
}
function mayorPorCapacidad(){
  var arr = []
  arr.push(...eventos)
  arr.sort((a, b)=> b.capacity - a.capacity)
  mayorCapacidad.innerHTML += arr[0].capacity
}
function tablaDeCategorias(){
    var categorias = eventos.map(evento => evento.category) 
    eventoPasados = eventos.filter(evento => evento.date < fechaPresente && (typeof evento.assistance) == 'number' ) //
    allCategorias = new Set (categorias)
    var eventoRepetido=[]
    var ingreso = 0
    var capacidadTotal = 0
    var audienciaTotal = 0
    var categorias = ""
    allCategorias.forEach(categoria => {
        eventoRepetido = eventoPasados.filter(evento => evento.category == categoria)
            eventoRepetido.forEach(eventoR => {
            categorias = eventoR.category
            ingreso = ingreso + eventoR.price*eventoR.assistance
            capacidadTotal = capacidadTotal + eventoR.capacity
            audienciaTotal = audienciaTotal + eventoR.assistance
            })
            infoTotal.push({category: categorias, ingresoTotal: ingreso,assistance: audienciaTotal, capacity: capacidadTotal })
            eventoRepetido= []
            ingreso = 0
            capacidadTotal = 0
            audienciaTotal = 0
    })
    desplazamientoTabla(infoTotal)
    function desplazamientoTabla(objetoTabla){
        objetoTabla.forEach(categoriaInfo=>{
            document.querySelector('#categoriasTabla').appendChild(document.createElement('td')).innerHTML 
            = categoriaInfo.category 
            document.querySelector('#ingresos').appendChild(document.createElement('td')).innerHTML 
            = "$" + categoriaInfo.ingresoTotal
            document.querySelector('#asistenciass').appendChild(document.createElement('td')).innerHTML 
            =  "%" + Math.round(((categoriaInfo.assistance * 100)/ categoriaInfo.capacity))  
        })}}

