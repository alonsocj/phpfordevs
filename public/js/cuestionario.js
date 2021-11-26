//Extrayendo elementos
const botonEmpezar = document.querySelector(".startbtn button");
const infobox = document.querySelector(".infobox");
const botonSalir = document.querySelector(".buttons .quit");
const botonContinuar = document.querySelector(".buttons .restart");
const quizbox = document.querySelector(".quizbox");
const botonSiguiente = document.querySelector(".nextbtn");
const resultbox = document.querySelector(".resultbox");


botonEmpezar.onclick = ()=>{
    infobox.classList.add("activeIn");
}

botonSalir.onclick = ()=>{
    infobox.classList.remove("activeIn");
}

botonContinuar.onclick = ()=>{
    infobox.classList.remove("activeIn");
    quizbox.classList.add("activeQu");
    mostrarPreguntas(0);
}
let contadorPreguntas =0;

botonSiguiente.onclick = ()=>{
    if(contadorPreguntas<questions.length - 1){
        contadorPreguntas ++;
        mostrarPreguntas(contadorPreguntas);
    }
    else{
        quizbox.classList.remove("activeQu");
        resultbox.classList.add("activeRe");
    }
    
}

function mostrarPreguntas(index){
    const preguntastxt = document.querySelector(".questiontext");
    const listaopciones = document.querySelector(".optionlist");
    const numPreguntas = document.querySelector(".numeropreguntas");
    let lineaPregunta = '<span>' + questions[index].num+ '. '+questions[index].question + '</span>';
    let lineaOpcion = '<div class="option"> <span>'+questions[index].options[0]+'</span></div>'
                    + '<div class="option"> <span>'+questions[index].options[1]+'</span></div>'
                    + '<div class="option"> <span>'+questions[index].options[2]+'</span></div>'
                    + '<div class="option"> <span>'+questions[index].options[3]+'</span></div>';
    listaopciones.innerHTML = lineaOpcion;
    preguntastxt.innerHTML = lineaPregunta;
    num = contadorPreguntas + 1;
    let contadorPreguntastxt = '<span><p>Pregunta</p><p>'+num+'</p><p>de</p><p>'+questions.length+'</p></span>';
    numPreguntas.innerHTML = contadorPreguntastxt;
    const opcion = listaopciones.querySelectorAll(".option");
    for(let i = 0; i < opcion.length; i++){
       opcion[i].setAttribute("onclick","optionSelected(this)");
    }
}

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = " "+ questions[contadorPreguntas].answer;
    if(userAns == correctAns){
        alert("correcto");
    }
    else{

    }
}