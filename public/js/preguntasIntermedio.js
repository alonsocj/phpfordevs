const nombreI = "Cuestionario Intermedio PHP";
let questionsI = [
    {
        num:1,
        question:"¿En qué lugar se ejecuta el código PHP?",
        answer: "Servidor",
        options: [
            "Servidor",
            "Cliente (ordenador propio)",
            "Base de datos",
            "Editor de código"
        ]
    },
    {
        num:2,
        question:"Una estructura análoga a una clase abstracta se llama:",
        answer: "interfaz",
        options: [
            "interface",
            "abstract",
            "interfaz",
            "constructor"
        ]
    },
    {
        num:3,
        question:"La clase que permite conectar y trabajar con una base de datos desde PHP5 se llama:",
        answer: "mysqli",
        options: [
            "mysqli",
            "mysql",
            "mysql1",
            "myphpadmin"
        ]
    },
    {
        num:4,
        question:"El siguiente código <img class = 'preguntaimg' src='/img/preguntaI.jpeg'> realiza:",
        answer: "Imprime datos recuperados de una base de datos",
        options: [
            "Inserta información en una tabla de la base de datos",
            "Consulta a tablas de la base de datos",
            "Imprime datos recuperados de una base de datos",
            "Conecta a una base de datos"
        ]
    },
    {
        num:5,
        question:"Facilita la creación de objetos a partir de otros ya existentes e implica que una subclase obtiene el comportamiento y los atributos de su superclase:",
        answer: "Herencia",
        options: [
            "Abstracción",
            "Constructor",
            "Herencia",
            "Polimorfismo"
        ]
    },
]
const questionsInum = questionsI.length;