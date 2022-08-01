function moneda(lado) {
    var posicion;
    if (lado==0) {
        posicion= "Cruz";
        return posicion;
    } else {
        posicion ="Cara";
        return posicion;
    }
}
var numero=Math.round(Math.random());

console.log(moneda(numero));

