var inputCheckbox = document.getElementById("acepto") /* capturo elemento html */
console.log(inputCheckbox)
function myFunction(){
    alert("felicidades usted ha sido admitido en mindhub")
}

inputCheckbox.addEventListener("click", myFunction)
/* ESTOY ESCUCHANDO UN EVENTO "CLICK" DE LA ETIQUETA INPUT CHECKBOX, PARA QUE SE EJECUTE UNA FUNCION
(ESA FUNCION ES PASADA AL SEGUNDO PARAMETRO DEL METODO addEventListener)*/
/* x.addEventListener("y", f)
    "x" es una etiqueta de html
    "y" es un tipo de evento
    "f" es una funcion
    addEventListener es un escuchador de evento al cual en el primer parametro le pasas el tipo de evento */

var hola = "hola";
const edad = 21;