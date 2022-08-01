//parte 1
const saludar = (nombre, apellido) => {
    console.log("Hola " + nombre + " " + apellido);
};
saludar("Hector", "Gomez");

//parte 2
function name(nombre) {
    console.log( nombre);
}
nombre=true;
name(nombre);

//parte 3
const digitos = function (...numeros){
    numeros.forEach(element => {
        console.log(element)
    });
};
digitos(1,2,3,4,5);