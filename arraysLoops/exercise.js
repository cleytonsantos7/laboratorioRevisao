//Crie um array com 5 nomes de paises.
//Adicione mais um pais no final da lista.
//Imprima a lista no tela.
//Remova um pais do fim da lista.
//Imprima a lista no tela.
//Adicione um pais no inicio da lista.
//Imprima a lista no tela.
//Imprima o ultimo pais da lista na tela.
//Imprima o segundo pais da lista na tela.
//Imprima o pais de indice 2 na tela.


const countrys = ['Brazil', 'Argentina', 'Colombia', 'Peru', 'Venezuela'];
countrys.push('Chile');
console.log(countrys);

countrys.pop();
console.log(countrys);

countrys.unshift('Ecuador');
console.log(countrys);

countrys.shift();
console.log(countrys);

console.log(countrys[countrys.length - 1]);
console.log(countrys[1]);
console.log(countrys[2]);