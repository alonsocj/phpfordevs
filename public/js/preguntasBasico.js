const nombreB = "Cuestionario Basico PHP";
let questionsB = [
    {
        num:1,
        question:"¿Cuál es la diferencia entre las funciones include() y require()?",
        answer:"La función require() termina con un error fatal si el archivo no se incluye mientras que include() puede saltarse el proceso y pasar al siguiente.",
        options: [
            "Include permite incluir un archivo específico mientras require no",
            "La función require() termina con un error fatal si el archivo no se incluye mientras que include() puede saltarse el proceso y pasar al siguiente.",
            "La función include() termina con un error fatal si el archivo no se incluye mientras que require() puede saltarse el proceso y pasar al siguiente.",
            "La función include() termina con un error fatal si el archivo no se incluye mientras que require() puede saltarse el proceso y pasar al siguiente."
        ]
    },
    {
        num:2,
        question:"¿Qué diferencia hay entre los métodos POST y GET?",
        answer: "GET recupera datos mientras que POST inserta y Actualiza",
        options: [
            "GET no posee límite de caracteres mientras que POST si lo posee",
            "POST acepta solamente datos ASCII mientras que GET cualquier dato",
            "GET recupera datos mientras que POST inserta y Actualiza",
            "POST envía la información en la URL mientras que GET no lo envía"
        ]
    },
    {
        num:3,
        question:"¿Qué realiza el operador “===”?",
        answer: "Comparar estrictamente dos valores tanto el tipo de dato como su valor",
        options: [
            "Comparar solamente el tipo de dato entre dos valores",
            "Comparar solamente el valor entre dos valores",
            "Asignar un valor estrictamente entre dos valores",
            "Comparar estrictamente dos valores tanto el tipo de dato como su valor"
        ]
    },
    {
        num:4,
        question:"¿Qué palabra reservada es usada para mostrar una cadena de caracteres?",
        answer: "echo",
        options: [
            "ecco",
            "echo",
            "eccho",
            "hecho"
        ]
    },
    {
        num:5,
        question:"¿Cuál es la manera correcta de declarar una variable?",
        answer: "$var",
        options: [
            "var",
            "!var",
            "$var",
            "#var"
        ]
    },
    {
        num:6,
        question:"Permite almacenar información y comienza con el símbolo de dólar",
        answer: "Variable",
        options: [
            "Función",
            "Variable",
            "Contenedor",
            "Almacenador"
        ]
    },
    {
        num:7,
        question:"Palabra reservada utilizada para declarar funciones",
        answer: "function",
        options: [
            "funcion",
            "eccho",
            "for",
            "function"
        ]
    },
    {
        num:8,
        question:"Cantidad máxima de caracteres que puede contener el método GET",
        answer: "2048",
        options: [
            "2009",
            "3000",
            "2048",
            "1024"
        ]
    },
    {
        num:9,
        question:"Tipos de datos que puede utilizar el método POST",
        answer: "ASCII y binarios",
        options: [
            "Solo ASCII",
            "ASCII y binarios",
            "Solo binarios",
            "Solo enteros"
        ]
    },
    {
        num:10,
        question:"Es visible para el usuario en la barra de direcciones ",
        answer: "GET",
        options: [
            "POST",
            "DIR",
            "GET",
            "FOR"
        ]
    },
    {
        num:11,
        question:"Envía un mensaje de error",
        answer: "error_log",
        options: [
            "error_log",
            "error_get",
            "error",
            "error_set"
        ]
    },
    {
        num:12,
        question:"Palabra reservada utilizada para finalizar ejecución de ciclos",
        answer: "break",
        options: [
            "switch",
            "finish",
            "break",
            "end"
        ]
    },   
    {
        num:13,
        question:"Palabra reservada que permite determinar si una variable está definida o no",
        answer: "isset",
        options: [
            "include",
            "def",
            "isset",
            "instanceof"
        ]
    },   
    {
        num:14,
        question:"Utilizada para asignar variables a manera de array",
        answer: "list",
        options: [
            "array",
            "list",
            "ol",
            "or"
        ]
    },   
    {
        num:15,
        question:"Utilizada para saltar el resto de la iteración en la que se encuentra y continúa con la evaluación",
        answer: "continue",
        options: [
            "break",
            "die",
            "continue",
            "end"
        ]
    },   
    {
        num:16,
        question:"Utilizada para imprimir una cadena de caracteres",
        answer: "print",
        options: [
            "echo",
            "send",
            "end",
            "print"
        ]
    },   
    {
        num:17,
        question:"Palabra reservada que hace accesible a las propiedades y métodos pero solamente desde una clase o sus heredadas",
        answer: "protected",
        options: [
            "public",
            "private",
            "protected",
            "reserved"
        ]
    },   
    {
        num:18,
        question:"Palabra reservada para destruir una variable en específico",
        answer: "unset",
        options: [
            "delete",
            "unset",
            "end",
            "finish"
        ]
    },   
    {
        num:19,
        question:"Palabra reservada utilizada para definir valores constantes",
        answer: "const",
        options: [
            "const",
            "equals",
            "varconst",
            "eval"
        ]
    },   
]
const questionsBnum = questionsB.length;