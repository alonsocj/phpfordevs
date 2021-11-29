//Extrayendo elementos
const botonEmpezar = document.querySelector(".startbtn button");
const infobox = document.querySelector(".infobox");
const botonSalir = document.querySelector(".buttons .quit");
const botonContinuar = document.querySelector(".buttons .restart");
const quizbox = document.querySelector(".quizbox");
const botonSiguiente = document.querySelector(".nextbtn");
const botonCancelar = document.querySelector(".cancelar");
const resultbox = document.querySelector(".resultbox");
const reintentarbtn = resultbox.querySelector(".buttons .restart");
const quitarbtn = resultbox.querySelector(".buttons .quit");
const listaopciones = document.querySelector(".optionlist");
const listaopciones1 = document.querySelector(".optionlist1");
const contadorTiempo = quizbox.querySelector(".timer .timersec");
const tiempoTexto = quizbox.querySelector(".timer .timertext");
const lineaTiempo = quizbox.querySelector(".time_line");
const puntajeFooter = document.querySelector(".puntaje");
let contadorPreguntas =0;
let contador;
let contadorLinea;
let puntaje=0;
botonEmpezar.onclick = ()=>{
    mostrarIndicaciones();
    infobox.classList.add("activeIn");
    contadorPreguntas =0;
    contador;
    contadorLinea;
    puntaje=0;
}

botonSalir.onclick = ()=>{
    infobox.classList.remove("activeIn");
    var url = '/cuestionarios'; 
    window.location.href = url; 
}

botonContinuar.onclick = ()=>{
    infobox.classList.remove("activeIn");
    quizbox.classList.add("activeQu");
    mostrarPreguntas(0);
    contarTiempo(60);
    iniciarLineaTiempo(0);
}


botonSiguiente.onclick = ()=>{
    tiempoTexto.textContent = "Tiempo restante";
    botonSiguiente.classList.remove("show");
    if(contadorPreguntas<questionsB.length - 1){
        contadorPreguntas ++;
        mostrarPreguntas(contadorPreguntas);
        contarTiempo(60);
        iniciarLineaTiempo(0);
    }
    else{
        mostrarResultado();
    }
    
}

botonCancelar.onclick = ()=>{
    quizbox.classList.remove("activeQu");
    window.location.reload();
}
quitarbtn.onclick = ()=>{
    resultbox.classList.remove("activeRe");
    var url = '/cuestionarios'; 
    window.location.href = url; 
}
reintentarbtn.onclick = ()=>{
    tiempoTexto.textContent = "Tiempo restante";
    quizbox.classList.add("activeQu");
    resultbox.classList.remove("activeRe");
    contadorPreguntas =0;
    contador;
    contadorLinea;
    puntaje=0;
    mostrarPreguntas(0);
    contarTiempo(60);
    iniciarLineaTiempo(0);
}
function mostrarIndicaciones(){
    const indicaciones = infobox.querySelector(".infolist");
    let indicacion = '<div class="info">1.El cuestionario consta de '+ questionsBnum+ ' preguntas.</div>'
                    + '<div class="info">2.Las preguntas que contiene el cuestionario son de complejidad basica.</div>'
                    + '<div class="info">3.Cada pregunta puntua 1 punto.</div>'
                    + '<div class="info">4.El cuestionario es secuencial, no se puede regresar a la pregunta anterior.</div>'
                    + '<div class="info">5.Tiene 60 segundos para responder cada pregunta.</div>';
    indicaciones.innerHTML = indicacion;
}

function mostrarPreguntas(index){
    const titulo = quizbox.querySelector("header .title");
    titulo.textContent = " "+nombreB;
    const preguntastxt = document.querySelector(".questiontext");
    const numPreguntas = document.querySelector(".numeropreguntas");
    let lineaPregunta = '<span>Pregunta ' + questionsB[index].num+ '. '+questionsB[index].question + '</span>';
    let lineaOpcion = '<div class="option"> <span>'+questionsB[index].options[0]+'</span></div>'
                    + '<div class="option"> <span>'+questionsB[index].options[1]+'</span></div>';
    let lineaOpcion1 = '<div class="option"> <span>'+questionsB[index].options[2]+'</span></div>'
                    + '<div class="option"> <span>'+questionsB[index].options[3]+'</span></div>';
    listaopciones.innerHTML = lineaOpcion;
    listaopciones1.innerHTML = lineaOpcion1;
    preguntastxt.innerHTML = lineaPregunta;
    num = contadorPreguntas + 1;
    let contadorPreguntastxt = '<span><p>Pregunta '+num+' de '+questionsB.length+'</p></span>';
    numPreguntas.innerHTML = contadorPreguntastxt;
    let puntajeFootertxt = '<span><p>Puntos:'+puntaje+'/'+questionsB.length+'</p></span>';
    puntajeFooter.innerHTML = puntajeFootertxt;
    const opcion = listaopciones.querySelectorAll(".option");
    const opcion1 = listaopciones1.querySelectorAll(".option");
    for(let i = 0; i < opcion.length; i++){
       opcion[i].setAttribute("onclick","optionSelected(this)");
    }
    for(let i = 0; i < opcion1.length; i++){
        opcion1[i].setAttribute("onclick","optionSelected(this)");
     }
}


function optionSelected(answer){
    clearInterval(contador);
    clearInterval(contadorLinea);
    let userAns = answer.textContent;
    let correctAns = " "+ questionsB[contadorPreguntas].answer;
    let allOptions = listaopciones.children.length;
    let allOptions1 = listaopciones1.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
        puntaje ++;
    }
    else{
        answer.classList.add("incorrect");
        for (let i = 0; i < allOptions; i++){
            if(listaopciones.children[i].textContent == correctAns){
                listaopciones.children[i].setAttribute("class","option correct");
            }
        }
        for (let i = 0; i < allOptions1; i++){
            if(listaopciones1.children[i].textContent == correctAns){
                listaopciones1.children[i].setAttribute("class","option correct");
            }
        }
    }
    for (let i = 0; i < allOptions; i++){
        listaopciones.children[i].classList.add("disabled");
    }
    for (let i = 0; i < allOptions1; i++){
        listaopciones1.children[i].classList.add("disabled");
    }
    let puntajeFootertxt = '<span><p>Puntos:'+puntaje+'/'+questionsB.length+'</p></span>';
    puntajeFooter.innerHTML = puntajeFootertxt;
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
            const allOptions1 = listaopciones1.children.length;
            let correcAns = " "+questionsB[contadorPreguntas].answer; 
            for(i=0; i < allOptions; i++){
                if(listaopciones.children[i].textContent == correcAns){ 
                    listaopciones.children[i].setAttribute("class", "option correct"); 
                }
                listaopciones.children[i].classList.add("disabled"); 
            }
            for(i=0; i < allOptions1; i++){
                if(listaopciones1.children[i].textContent == correcAns){ 
                    listaopciones1.children[i].setAttribute("class", "option correct"); 
                }
                listaopciones1.children[i].classList.add("disabled"); 
            }

            botonSiguiente.classList.add("show");
        }
    }
}

function iniciarLineaTiempo(time){
    contadorLinea = setInterval(timer, 62);
    function timer(){
        time ++;
        lineaTiempo.style.width = time + "px";
        if(time > 956){ 
            clearInterval(contadorLinea); 
        }
    }
}

function mostrarResultado(){
    quizbox.classList.remove("activeQu");
    infobox.classList.remove("activeIn");
    resultbox.classList.add("activeRe");
    const puntajetxt = resultbox.querySelector(".scoretext");
    let nota = (puntaje/questionsB.length)*10;
    if(nota>8){
        puntajetxt.innerHTML = '<span><p>Felicidades aprobaste el cuestionario, obtuviste '+puntaje+' de '+questionsB.length+' puntos </p></span>'
                            +   '<span>Tu nota es de '+nota.toFixed(2)+'</span>';
    }else{
        if(nota>5){
            puntajetxt.innerHTML = '<span><p>Sigue esforzandote aún puedes mejorar, obtuviste '+puntaje+' de '+questionsB.length+' puntos </p></span>'
                               +   '<span>Tu nota es de '+nota.toFixed(2)+'</span>';
        }else{
            puntajetxt.innerHTML = '<span><p>Lo siento reprobaste el cuestionario, obtuviste '+puntaje+' de '+questionsB.length+' puntos </p></span>'
                                +   '<span>Tu nota es de '+nota.toFixed(2)+'</span>';
        }
    }
    
}