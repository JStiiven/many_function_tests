let factorial = 1;
function factor(inicio, fin){
    for(let i = inicio; i <= fin;i++){
        factorial *= i
        console.log(factorial);
    }
}
factor(1, 5);