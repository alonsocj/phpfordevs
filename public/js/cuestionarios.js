window.addEventListener("load", function(){
	contarPreguntasBasico();
    contarPreguntasIntermedio();
    contarPreguntasAvanzado();
});
function contarPreguntasBasico(){
    document.getElementById("cantBasico").innerHTML="Preguntas:"+ questionsB.length;
}
function contarPreguntasIntermedio(){
    document.getElementById("cantIntermedio").innerHTML="Preguntas:"+ questionsI.length;
}
function contarPreguntasAvanzado(){
    document.getElementById("cantAvanzado").innerHTML="Preguntas:"+ questionsA.length;
}