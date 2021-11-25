//Extrayendo elementos
const botonEmpezar = document.querySelector(".startbtn button");
const infobox = document.querySelector(".infobox");
const botonSalir = document.querySelector(".buttons .quit");
const botonContinuar = document.querySelector(".buttons .restart");
const quizbox = document.querySelector(".quizbox");

botonEmpezar.onclick = ()=>{
    infobox.classList.add("activeIn");
}

botonSalir.onclick = ()=>{
    infobox.classList.remove("activeIn");
}

botonContinuar.onclick = ()=>{
    infobox.classList.remove("activeIn");
    quizbox.classList.add("activeQu");
    mostrarPreguntas(1);
}
let contadorPreguntas =0;
function mostrarPreguntas(index){
    const preguntastxt = document.querySelector(".questiontext");
    const listaopciones = document.querySelector(".optionlist");
    let lineaPregunta = '<span>' + questions[index].question + '</span>';
    let lineaOpcion = '<div class="option"> <span>'+questions[index].options[0]+'</span></div>'
                    + '<div class="option"> <span>'+questions[index].options[1]+'</span></div>'
                    + '<div class="option"> <span>'+questions[index].options[2]+'</span></div>'
                    + '<div class="option"> <span>'+questions[index].options[3]+'</span></div>';
    listaopciones.innerHTML = lineaOpcion;
    preguntastxt.innerHTML = lineaPregunta;
}