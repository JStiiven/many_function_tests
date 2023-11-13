function par(n1){
    if(n1 % 2 == 0){
        return `par`
    }else{
        return `impar`
    }
}
let resultado = par(2);
console.log(`El numero es: ${resultado}.`);