function calculadora(n1, n2){
    let sum = n1 + n2
    console.log(`La suma es: ${sum}`);
    let resta = n1 - n2
    console.log(`La resta es: ${resta}`);
    let multiplicacion = n1 * n2
    console.log(`La multiplicacion es: ${multiplicacion}`);
    if(n2 !== 0){
        let div = n1 / n2
        console.log(`La division es: ${div}`);
    }else{
        console.log(`No se puede dividir entre 0`);
    }
}
calculadora(10, 54)
