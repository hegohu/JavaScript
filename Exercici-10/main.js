//Apartado 1
console.log(reemplazo("cambio letra de las palabras"));
function reemplazo(palabra) {
    console.log(palabra);
    palabra=palabra.replaceAll('a','o');
    return palabra;
};
//Apartado 2
contiene('academia');
contiene('escuela');
function contiene(palabra) {
    console.log(palabra.startsWith("aca"));
    
    
};
//Apartado 3
repetir('Hola');
function repetir(palabra) {
    console.log(palabra.repeat(3));    
}


