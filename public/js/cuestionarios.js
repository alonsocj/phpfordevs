window.addEventListener("load", function(){
	contarPreguntasBasico();
    contarPreguntasIntermedio();
    contarPreguntasAvanzado();
});
function contarPreguntasBasico(){
    document.getElementById("cantBasico").innerHTML="Nº de Preguntas: "+ questionsB.length;
}
function contarPreguntasIntermedio(){
    document.getElementById("cantIntermedio").innerHTML="Nº de Preguntas: "+ questionsI.length;
}
function contarPreguntasAvanzado(){
    document.getElementById("cantAvanzado").innerHTML="Nº de Preguntas: "+ questionsA.length;
}