function solucao(precos) {
      const totalAPagar = precos.reduce((total, valor) => {
          return total + valor;
      });
      
      
      if (precos.length < 3) {
          console.log(totalAPagar);
          return;
      } 
    
      const menorValor = Math.min(...precos)
      const totalComDesconto = totalAPagar - menorValor / 2;
     
      console.log(totalComDesconto);
}

const precos0 = [ 150, 50 ];
const precos1 = [ 100 , 100, 100 ];
const precos2 = [ 200, 150, 50, 100 ];

solucao(precos0);
solucao(precos1);
solucao(precos2);