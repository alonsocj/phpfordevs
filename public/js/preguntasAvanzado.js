const nombreA = "Cuestionario Avanzado PHP";
let questionsA = [
    {
        num:1,
        question:"¿Cómo se puede diferenciar las sesiones con “privilegios” de las que no los poseen?",
        answer:"Definiendo un identificador para la sesión del usuario",
        options: [
            "Creando usuarios y su identificador correspondiente",
            "Definiendo un identificador para la sesión del usuario",
            "Creando un usuario único al que se le otorguen permisos específicos",
            "Ninguna de las anteriores"
        ]
    },
    {
        num:2,
        question:"¿Qué se debe hacer para mantener una sesión activa?",
        answer: "D) A y B son correctas",
        options: [
            "A) El identificador de la sesión debe ser enviado de una página a otra",
            "B) Pasar el identificador de sesión en los formularios como un campo HIDDEN",
            "C) Generar un identificador de sesión aleatorio en cada página",
            "D) A y B son correctas"
        ]
    },
    {
        num:3,
        question:"¿Cuál es la función de session_destroy()?",
        answer: "Elimina todos los datos asociados con una sesión y borra el archivo en el servidor pero no borra la cookie",
        options: [
            "Elimina todos los datos asociados con una sesión y borra el archivo en el servidor pero no borra la cookie",
            "Deja sin ningún valor asignado a todas las variables de la sesión",
            "Elimina el camino al directorio donde se guardan los ficheros asociados a la sesión",
            "Elimina temporalmente los parámetros de configuración de las cookies"
        ]
    },
    {
        num:4,
        question:"Descodifica la cadena que recibe como parámetro y que contiene la info de sesión, después de usar esta función se actualiza la info de sesión:",
        answer: "session_decode(cadena);",
        options: [
            "session_decode([cadena]);",
            "session_decode([path]);",
            "session_decode(cadena);",
            "Ninguna de las anteriores"
        ]
    },
    {
        num:5,
        question:"Permite definir nuevos valores para los parámetros de configuración de las cookies:",
        answer: "D)",
        options: [
            "A)<img class = 'opcionimg2' src='/img/avanzado5a.png'>",
            "B)<img class = 'opcionimg2' src='/img/avanzado5b.png'>",
            "C)<img class = 'opcionimg2' src='/img/avanzado5c.png'>",
            "D)<img class = 'opcionimg2' src='/img/avanzado5d.png'>"
        ]
    },
    {
        num:6,
        question:"Devuelve el nombre del módulo que se usa para realizar la gestión de sesiones:",
        answer: "A)",
        options: [
            "A)<img class = 'opcionimg2' src='/img/avanzado6a.png'>",
            "B)<img class = 'opcionimg2' src='/img/avanzado6b.png'>",
            "C)<img class = 'opcionimg2' src='/img/avanzado6c.png'>",
            "D)<img class = 'opcionimg2' src='/img/avanzado6d.png'>"
        ]
    },
    {
        num:7,
        question:"Permite definir nuevos valores para los parámetros de configuración de las cookies:",
        answer: "Ninguna opción es correcta",
        options: [
            "<img class = 'opcionimg2' src='/img/avanzado7a.png'>",
            "Ninguna opción es correcta",
            "<img class = 'opcionimg2' src='/img/avanzado7c.png'>",
            "<img class = 'opcionimg2' src='/img/avanzado7d.png'>"
        ]
    },
    {
        num:8,
        question:"¿Cuál es la sintaxis para crear una cookie en PHP?",
        answer: "setcookie(name, value, expire, path, domain, secure, httponly);",
        options: [
            "setcookie(name, value, expire, path, domain, secure, htponly);",
            "setcookies(name, value, expire, path, domain);",
            "setcokie(name, value, expire, domain, secure, httponly);",
            "setcookie(name, value, expire, path, domain, secure, httponly);"
        ]
    },
    {
        num:9,
        question:"¿Cuál es la sintaxis correcta para eliminar una cookie?",
        answer: "C)",
        options: [
            "A) B y C son correctas",
            "B) Se debe usar la función setcookie() con una fecha de expiración pasada",
            "C)<img class = 'opcionimg3' src='/img/avanzado9C.png'>",
            "D)<img class = 'opcionimg3' src='/img/avanzado9D.png'>"
        ]
    },
    {
        num:10,
        question:"Contienen información sobre un solo usuario y están disponibles para todas las páginas en una aplicación:",
        answer: "Variables de sesión",
        options: [
            "Variables de sesión",
            "Variables globales",
            "Variables super globales",
            "Variables estáticas"
        ]
    },
    {
        num:11,
        question:"¿Qué es una Cookie?",
        answer: "Una variable que se registra dentro del navegador",
        options: [
            "Una variable que se registra dentro del navegador",
            "Un tipo de archivo",
            "Un lenguaje de programación",
            "Ninguna de las anteriores"
        ]
    },
    {
        num:12,
        question:"¿Cuáles son los estados de conexión en PHP?",
        answer: "Normal, Aborted y Timeout",
        options: [
            "Normal, Aborted y Timeout",
            "Normal y Aborted",
            "Null",
            "End"
        ]
    },   
    {
        num:13,
        question:"¿Cuántos tipos de errores y avisos hay en PHP?",
        answer: "4",
        options: [
            "4",
            "2",
            "5",
            "3"
        ]
    },   
    {
        num:14,
        question:"¿Cuál de los siguientes es un tipo de error en PHP?",
        answer: "Parse Errors",
        options: [
            "Parse Errors",
            "Error",
            "Todos son correctos",
            "Error de sintaxis"
        ]
    },   
    {
        num:15,
        question:"¿Qué es el protocolo HTTP en PHP?",
        answer: "Protocolo que proporciona un mecanismo de autenticación",
        options: [
            "No existe ese protocolo",
            "Protocolo para iniciar el proyecto",
            "Protocolo que proporciona un mecanismo de autenticación",
            "Protocolo para borrar variables"
        ]
    },
]
 const questionsAnum = questionsA.length;
