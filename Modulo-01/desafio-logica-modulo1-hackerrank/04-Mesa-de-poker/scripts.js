function solucao(min, max, valores) {
    const apostasValidas = valores.filter((valor) => {
        return valor >= min && valor <= max;
    });
  
    console.log(apostasValidas)
}

const apostas0 = [ 0, 5, 6, 10, 11 ];
solucao(2, 10, apostas0);

const apostas1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
solucao(1, 1, apostas1);