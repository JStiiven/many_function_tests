function imprimirParesOImpares(inicio, fin, tipo) {
    if (tipo !== 'par' && tipo !== 'impar') {
      console.log('Tipo no válido. Por favor, elige "par" o "impar".');
      return;
    }
  
    console.log(`Números ${tipo}es en el rango de ${inicio} a ${fin}:`);
  
    for (let i = inicio; i <= fin; i++) {
      if ((tipo === 'par' && i % 2 === 0) || (tipo === 'impar' && i % 2 !== 0)) {
        console.log(i);
      }
    }
  }
  imprimirParesOImpares(1, 10, 'par');
  imprimirParesOImpares(1, 10, 'impar');
  