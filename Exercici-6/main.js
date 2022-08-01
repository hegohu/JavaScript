//Apartado numero1
console.log("Apartado numero 1");
function sumar(num1, num2, num3) {
  console.log(num1 + " + " + num2 + " + " + num3);
  return num1 + num2 + num3;
}
console.log(sumar(1, 2, 3));
console.log('-----------------------------');
//Apartado numero 2
console.log("Apartado numero 2");
function persona(nombre, apellido1, apellido2) {
  console.log(nombre + " " + apellido1 + "  " + apellido2);
}
persona("Hector", "Gomez", "Hurtado");
console.log('-----------------------------');
//Apartado numero 3
console.log("Apartado numero 3");
function maximo(numero1, numero2) {
  console.log("Numero 1: " + numero1);
  console.log("Numero 2: " + numero2);
  return Math.max(numero1, numero2);
}

console.log("El maximo es " + maximo(1, 2));
