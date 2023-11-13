function sumaCuadrados(n) {
    let suma = 0;
  
    for (let i = 1; i <= n; i++) {
      suma += i * i;
    }
  
    return suma;
  }
  let n = 5;
  let resultadoSuma = sumaCuadrados(n);
  console.log(`La suma de los cuadrados de los números entre 1 y ${n} es: ${resultadoSuma}`);
  