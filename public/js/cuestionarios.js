window.addEventListener("load", function(){
	contarPreguntasBasico();
    contarPreguntasIntermedio();
    contarPreguntasAvanzado();
});
function contarPreguntasBasico(){
    document.getElementById("cantBasico").innerHTML="Preguntas: "+ questionsBnum;
}
function contarPreguntasIntermedio(){
    document.getElementById("cantIntermedio").innerHTML="Preguntas: "+ questionsInum;
}
function contarPreguntasAvanzado(){
    document.getElementById("cantAvanzado").innerHTML="Preguntas: "+ questionsAnum;
}