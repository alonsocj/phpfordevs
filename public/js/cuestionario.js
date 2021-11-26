//Extrayendo elementos
const botonEmpezar = document.querySelector(".startbtn button");
const infobox = document.querySelector(".infobox");
const botonSalir = document.querySelector(".buttons .quit");
const botonContinuar = document.querySelector(".buttons .restart");
const quizbox = document.querySelector(".quizbox");
const botonSiguiente = document.querySelector(".nextbtn");
const resultbox = document.querySelector(".resultbox");
const reintentarbtn = resultbox.querySelector(".buttons .restart");
const quitarbtn = resultbox.querySelector(".buttons .quit");
const listaopciones = document.querySelector(".optionlist");
const contadorTiempo = quizbox.querySelector(".timer .timersec");
const tiempoTexto = quizbox.querySelector(".timer .timertext");
const lineaTiempo = quizbox.querySelector(".time_line");
let contadorPreguntas =0;
let contador;
let contadorLinea;
let puntaje=0;
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
    contarTiempo(30);
    iniciarLineaTiempo(0);
}


botonSiguiente.onclick = ()=>{
    tiempoTexto.textContent = "Tiempo restante";
    botonSiguiente.classList.remove("show");
    if(contadorPreguntas<questions.length - 1){
        contadorPreguntas ++;
        mostrarPreguntas(contadorPreguntas);
        contarTiempo(30);
        iniciarLineaTiempo(0);
    }
    else{
        mostrarResultado();
    }
    
}

quitarbtn.onclick = ()=>{
    resultbox.classList.remove("activeRe");
}
reintentarbtn.onclick = ()=>{
    quizbox.classList.add("activeQu");
    resultbox.classList.remove("activeRe");
    contadorPreguntas =0;
    contador;
    contadorLinea;
    puntaje=0;
    mostrarPreguntas(0);
    contarTiempo(30);
    iniciarLineaTiempo(0);
}

function mostrarPreguntas(index){
    const preguntastxt = document.querySelector(".questiontext");
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
let iconcheck = '<div class="icono check"><i class="fas fa-check"></i></div>';
let iconcross = '<div class="icono cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(contador);
    clearInterval(contadorLinea);
    let userAns = answer.textContent;
    let correctAns = " "+ questions[contadorPreguntas].answer;
    let allOptions = listaopciones.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend",iconcheck);
        puntaje ++;
    }
    else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend",iconcross);
        for (let i = 0; i < allOptions; i++){
            if(listaopciones.children[i].textContent == correctAns){
                listaopciones.children[i].setAttribute("class","option correct");
                listaopciones.children[i].insertAdjacentHTML("beforeend",iconcheck);
            }
        }
    }
    for (let i = 0; i < allOptions; i++){
        listaopciones.children[i].classList.add("disabled");
    }
    botonSiguiente.classList.add("show");
}

function contarTiempo(time){
    contador = setInterval(timer, 1000);
    function timer(){
        contadorTiempo.textContent = time;
        time--;
        if(time < 9){ 
            let addZero = contadorTiempo.textContent; 
            contadorTiempo.textContent = "0" + addZero; 
        }
        if(time < 0){ 
            clearInterval(contador); 
            tiempoTexto.textContent = "Tiempo terminado";
            const allOptions = listaopciones.children.length;
            let correcAns = " "+questions[contadorPreguntas].answer; 
            for(i=0; i < allOptions; i++){
                if(listaopciones.children[i].textContent == correcAns){ 
                    listaopciones.children[i].setAttribute("class", "option correct"); 
                    listaopciones.children[i].insertAdjacentHTML("beforeend",iconcheck);
                }
                listaopciones.children[i].classList.add("disabled"); 
            }

            botonSiguiente.classList.add("show");
        }
    }
}

function iniciarLineaTiempo(time){
    contadorLinea = setInterval(timer, 55);
    function timer(){
        time ++;
        lineaTiempo.style.width = time + "px";
        if(time > 549){ 
            clearInterval(contadorLinea); 
        }
    }
}

function mostrarResultado(){
    quizbox.classList.remove("activeQu");
    infobox.classList.remove("activeIn");
    resultbox.classList.add("activeRe");
    const puntajetxt = resultbox.querySelector(".scoretext");
    if(puntaje>4){
        puntajetxt.innerHTML = '<span><p>Felicidades aprobaste el cuestionario. Obtuviste '+puntaje+' de '+questions.length+' puntos. </p></span>';
    }else{
        if(puntaje>2){
            puntajetxt.innerHTML = '<span><p>Sigue esforzandote aun puedes mejorar. Obtuviste '+puntaje+' de '+questions.length+' puntos. </p></span>';
        }else{
            puntajetxt.innerHTML = '<span><p>Lo siento reprobaste el cuestionario. Obtuviste '+puntaje+' de '+questions.length+' puntos. </p></span>';
        }
    }
    
}