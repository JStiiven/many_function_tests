let genero = prompt("Ingrese su genero").toLowerCase();
let edad = parseInt(prompt("Ingrese su edad"));
let estatura = parseInt(prompt("Ingrese su estarura"));
let resultadoIcfes = parseInt(prompt("Ingrese su icfes"));
if(genero == "m" && edad >= 18 && edad <= 25 && estatura >= 170 && resultadoIcfes >= 60){
    alert("Usted es apto")
}else if(genero == "f"&& edad >= 18 && edad <= 25 && estatura >= 170 && resultadoIcfes >= 60){

}
//Valor de funcion
/* function intento1(){
    console.log(1);
    console.log(2);
    return 15;
    console.log(3);
    return "HOlaaaaa"
    //El return agarra hasta la linea donde este insertada y "corta" por así decirlo
} */
/* 
function nombre(nombre = "Desconocido", año = "No se sabe"){
    console.log(`hola mi nombre es ${nombre} y tengo ${año} años` );
} 
nombre("Stiven", 18);
nombre(); */

//funciones declaradas vs funciones expresadas
/* funcionDeclarada();

function funcionDeclarada(){
    console.log("Esto es una función declarada, puede invocarse en cualquier parte de nuestro codigo incluso antes de que la función sea declarada");
}
funcionDeclarada(); */

//Función anónima
/* const funcionExpresada = function(){
    console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos está función antes de su definición JS nos dirá..");

}
funcionExpresada(); */ 