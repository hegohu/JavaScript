var String = "Hector Gomez";
console.log(String+","+" tipo: "+(typeof String));

let edat="26";
console.log(edat+","+" tipo: "+(typeof edat) );

var soltero =true;
console.log("soltero, "+" tipo: "+(typeof soltero)); 

function datos(){
    const arr = ["Hector",26,"soltero"];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
     console.log(element);   
    }
}
datos();