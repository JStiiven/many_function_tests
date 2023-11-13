function calculadora(operacion, x, y){
    if(operacion == "suma"){
        return x + y
    }else if(operacion == "resta"){
        return x - y
    }else if(operacion == "multiplicacion"){
        return x * y
    }else if(operacion == "division"){
        return x / y
    }else if(operacion == "residuo"){
        return x % y
    }else if(operacion == "exponenciacion"){
        return x ** y
    }else{
        return -1
    }
}
console.log(calculadora("suma", 6, 5));
console.log(calculadora("resta", 15, 5));
console.log(calculadora("multiplicacion", 4, 5));
console.log(calculadora("division", 12, 5));
console.log(calculadora("residuo", 12, 3));
console.log(calculadora("exponenciacion", 23, 4));
console.log(calculadora("Nada"));
