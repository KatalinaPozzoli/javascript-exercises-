
function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length - 1]

}

function incrementarPorUno(array) {
    // "array" debe ser una arreglo de números enteros (int/integers)
    // Aumenta cada número por 1 y devuelve el array
    // Tu código:
    return array.map(value => value + 1)
}

function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento)
    return array
}

function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    return palabras.join(' ')

}

function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    return array.includes(elemento)

}

function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:

    //return resultadosTest.map(notas => notas.reduce((agg, nota)=> agg + nota, 0)/notas.length)
    return resultadosTest.reduce((agg, nota)=> agg + nota, 0)/resultadosTest.length
}


function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    let max = numeros[0]
    numeros.forEach(value => max = value > max ? value : max)
    return max
}

function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Tu código:
    if (!arguments.length){
        return 0
    }
    const theArgs = Array.from(arguments)
    return theArgs.reduce((agg, current) => agg * current, 1);
}

function cuentoElementos(arreglo){
    // Realiza una función que retorne la cantidad de los elementos del arreglo que sean mayores a 18.
    // Tu código:
    return arreglo.filter((numero) => numero > 18).length

}

function todosIguales(arreglo) {
    // Escriba la función todosIguales, si todos los elementos de un arreglo son iguales
    // retornar true, caso contrario retornar false.
    // Tu código:
    const first = arreglo[0]
    // console.log( arreglo.reduce((agg, current) => agg && first === current, true))
    let equal = true
    let counter = 1
    while(equal && arreglo[counter]){
        equal = first === arreglo[counter]
        counter++
    }
    return equal
}

function mesesDelAño(array) {
    // Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    // Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    const resultado = []
    const busqueda = ['Enero', 'Marzo', 'Noviembre']
    array.forEach((mes) => {
        if(busqueda.includes(mes) && !resultado.includes(mes)){
            resultado.push(mes)
        }
    })
    return resultado.length === busqueda.length ? resultado : 'No se encontraron los meses pedidos'

}

function breakStatement(numero) {
    // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array.
    // Devolver el array
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
    // devolver: "Se interrumpió la ejecución"
    // Pista: usá el statement 'break'
    // Tu código:
    const array = []
    let counter = 0
    let suma = numero
    while (counter < 10){
        suma += 2
        if( suma === counter ){
            return "Se interrumpió la ejecución"
            break
        }
        counter++
        array.push(suma)
    }
    return array
}

function continueStatement(numero) {
    // Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array.
    // Devolver el array
    // Cuando el número de iteraciones alcance el valor 5, no se agrega ese número al array
    // y se continua con la siguiente iteración
    // Pista: usá el statement 'continue'
    // Tu código:
    const array = []
    let counter = 0
    let suma = numero
    while (counter < 10){
        suma += 2
        if(counter === 5) {
            counter++
            continue
        }
        array.push(suma)
        counter++
    }
    return array
}

function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:

    let gato = {
        nombre: nombre,
        edad:edad,
        meow: function(){
            return "Meow!"
        }}

    return gato
    /*
    const gato = new Object();s
    gato.nombre = nombre
    gato.edad = edad
    gato.meow = function(){return "Meow!"}
    return gato
     */
}

function agregarPropiedad(objeto, property) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
    // Tu código:
    objeto = {
        ...objeto,
        [property]: null
    }
    return objeto

}

function invocarMetodo(objeto, metodo) {
    // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
    // Invoca ese método
    // Nada necesita ser devuelto ("returned")
    // Tu código:
    objeto[metodo]()

}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
    // Multiplica el numeroMisterioso por 5 y devuelve el producto
    // Tu código:
    return objetoMisterioso.numeroMisterioso *= 5

}

function eliminarPropiedad(objeto, unaPropiedad) {
    // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
    // tip: tenes que usar bracket notation
    // Devuelve el objeto
    // Tu código:
    delete objeto[unaPropiedad]
    return objeto
}

function nuevoUsuario(nombre, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    const user = {
        nombre: nombre,
        email: email,
        password: password
    }
    return user
}

function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:
    return !!usuario.email

}

function tienePropiedad(objeto, propiedad) {
    // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
    // "propiedad" es un string
    // De lo contrario, devuelve "false"
    // Tu código:
    return !!objeto[propiedad]

}

function actualizarPassword(usuario, nuevaPassword) {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
    usuario.password = nuevaPassword
    return usuario
}

function agregarAmigo(usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // Tu código:
    usuario.amigos = [...usuario.amigos, nuevoAmigo]
    // usuario.amigos.push(nuevoAmigo)
    return usuario

}

function sumarLikesDeUsuario(usuario) {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    return usuario.posts.reduce((agg,{likes}) => agg + likes, 0)
}
