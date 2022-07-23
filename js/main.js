/*
Ronda 3

Del siguiente arreglo llamada 'arraysNames':

const arraysNames = [
    ["Ruben", "Flores"],
    ["Andre", "Vazquez"],
    ["Fernando", "Palacios"],
    ["George", "Camarillo"],
    ["Ale", "Paez"],
    ["Shari", "Andrade"],
    ["Erick", "Trujillo"],
    ["Arce", "Gutiérrez"],
    ["Juan", "Hernandez"]
]

Obtener de cada nombre la siguiente salida:
Ruben Flores R.B.
Andre Vazquez A.V.
Fernando Palacios F.P.
George Camarillo G.C.
Ale Paez A.P.
*/


const arraysNames = [
    ["Ruben", "Flores"],
    ["Andre", "Vazquez"],
    ["Fernando", "Palacios"],
    ["George", "Camarillo"],
    ["Ale", "Paez"],
    ["Shari", "Andrade"],
    ["Erick", "Trujillo"],
    ["Arce", "Gutiérrez"],
    ["Juan", "Hernandez"]
]



    function getinitials (name){
    const nameSplitted = name.split(" ")
    console.log("nameSplitted",nameSplitted)

    let initials = ""
    nameSplitted.forEach((word)=>{
        initials += word.charAt(0) + "."
        console.log("word",word)
    })

    return initials
}

nombre = "Jonathan Reyes Alatorre"
//console.log(getinitials(nombre))

console.log(arraysNames)
arraysNames.forEach((array) => console.log(array.join(' ') ))
arraysNames.forEach((array) => console.log(getinitials(array.join(' '))))
arraysNames.forEach((array) => console.log(array.join(' ') +' '+getinitials(array.join(' '))))

console.log(" ")
/*
. Del siguiente arreglo

arraysKoders =[
    [
        ["name","Ruben"],
        ["lasName","Alvarez"],
        ["Generation",1],
        ["bootcamp","Python"],
        ["score",90],
    ],
    [
        ["name","Andre"],
        ["lasName","Alvarez"],
        ["Generation",1],
        ["bootcamp","Python"],
        ["score",90],
    ],
    [
        ["name","Ale"],
        ["lasName","Paez"],
        ["Generation",1],
        ["bootcamp","Python"],
        ["score",98],
    ],
    [
        ["name","Juan pi"],
        ["lasName","Lopez"],
        ["Generation",10],
        ["bootcamp","Javascript"],
        ["score",95],
    ],
    [
        ["name","Cintia"],
        ["lasName","Gomez"],
        ["Generation",10],
        ["bootcamp",Javascript],
        ["score",85],
    ],
    [
        ["name","Shari"],
        ["lasName","Andrade"],
        ["Generation",10],
        ["bootcamp",Javascript],
        ["score",90],
    ],
    [
        ["name","Arce"],
        ["lasName","Gutierrez"],
        ["Generation",10],
        ["bootcamp",Javascript],
        ["score",90],
    ],
    [
        ["name","JC"],
        ["lasName","Hernandez"],
        ["Generation",10],
        ["bootcamp",Javascript],
        ["score",90],
    ],
    [
        ["name","Erick"],
        ["lasName","Trujillo"],
        ["Generation",10],
        ["bootcamp",Javascript],
        ["score",90],
    ]
]


Crear un array de objetos de tipo koder que se encuentranen el array arrayKoders, Quedando de la siguiente manera:

newArrayKoders = [
        {
        name: "Ruben",
        lasName: "Alvarez",
        Generation: 1,
        bootcamp: "Python",
        score: 90
        },
        {
        name: "Andre",
        lasName: "Vazquez",
        Generation: 1,
        bootcamp: "Python",
        score: 90
        },
        .
        .
        .
    ]


    Una vez tenirndo el array de newArrayKoders obtener los siguienrtes datos:

        -Obrtener los koders que se encuentren en el Bootcamp de Python
        -Obrtener los koders que se encuentren en el Bootcamp de JS
        -Obtener el promedio general de todos los kodersregistrados
        -DOM->Pintar los koders en una tabla (Utilizando los metodos para manipular el DOM)

*/


arraysKoders =[
    [
        ["name","Ruben"],
        ["lasName","Alvarez"],
        ["Generation",1],
        ["bootcamp","Python"],
        ["score",90],
    ],
    [
        ["name","Andre"],
        ["lasName","Alvarez"],
        ["Generation",1],
        ["bootcamp","Python"],
        ["score",90],
    ],
    [
        ["name","Ale"],
        ["lasName","Paez"],
        ["Generation",1],
        ["bootcamp","Python"],
        ["score",98],
    ],
    [
        ["name","Juan pi"],
        ["lasName","Lopez"],
        ["Generation",10],
        ["bootcamp","Javascript"],
        ["score",95],
    ],
    [
        ["name","Cintia"],
        ["lasName","Gomez"],
        ["Generation",10],
        ["bootcamp","Javascript"],
        ["score",85],
    ],
    [
        ["name","Shari"],
        ["lasName","Andrade"],
        ["Generation",10],
        ["bootcamp","Javascript"],
        ["score",90],
    ],
    [
        ["name","Arce"],
        ["lasName","Gutierrez"],
        ["Generation",10],
        ["bootcamp","Javascript"],
        ["score",90],
    ],
    [
        ["name","JC"],
        ["lasName","Hernandez"],
        ["Generation",10],
        ["bootcamp","Javascript"],
        ["score",90],
    ],
    [
        ["name","Erick"],
        ["lasName","Trujillo"],
        ["Generation",10],
        ["bootcamp","Javascript"],
        ["score",90],
    ]
]

function Koder(name, lastname, generation, bootcamp, score){
    this.name = name;
    this.lastname = lastname;
    this.generation = generation;
    this.bootcamp = bootcamp;
    this.score = score;
}

const newArrayKoders = arraysKoders.map((arrayProperties) => {
//    console.log("Objeto: ",arrayProperties)
const objectKoder = arrayProperties.reduce((object, koderProperty) => {
//    console.log("Propiedad ",koderProperty)
    const key = koderProperty[0]
    const value = koderProperty[1]
    object[key] = value
//    console.log("Acumulador: ",object)
    return object
}, {})

//console.log(objectKoder)
//return objectKoder
return new Koder(objectKoder.name, objectKoder.lastname, objectKoder.generation, objectKoder.bootcamp, objectKoder.score) 

})

console.log("newArrayKoders",newArrayKoders)

const Prueba = new Koder("jonathan", "Reyes", 11, "JavaScript", 90)

//console.log(Prueba)