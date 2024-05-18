
const titulo = document.querySelector("h1")
const imagen = document.querySelector(".img")

function sortear() {
const min = Math.ceil(document.querySelector (".minimo").value)
const max = Math.floor(document.querySelector (".maximo").value)


const resultado = Math.floor(Math.random() * (max - min + 1)) + min;


imagen.style.  visibility = "visible"
titulo.innerHTML = resultado

}


//Math.ceil()>> redondea el valor hacia arriba de lo que este dentro del parentesis.
//Math.floor() >> redondea el valor hacia abajo de lo que este dentro del parentesis.
//Math.floor(Math.random() * (max - min + 1)) + min; >> redondea el valor hacia el minimo, de,
//(el numero variable) x (valor max - valor min + 1) + valor min;