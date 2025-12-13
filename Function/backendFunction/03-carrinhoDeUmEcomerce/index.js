const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo () {
    console.log(`Cliente: ${this.nomeDoCliente}
Total de itens: ${this.calcularTotalDeItens()}
Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`)
    },
    addProduto (produto) {
let produtoExistente = false
    for (let i of this.produtos){
    
      if (i.id === produto.id) {
        i.qtd += produto.qtd;
        produtoExistente = true;
        break;
    } 
}
      if (!produtoExistente) {
        this.produtos.push(produto)
    }
    },
    imprimirDetalhe () {
    console.log(`Cliente: ${this.nomeDoCliente}`)
this.produtos.forEach((produto, index) => {
            console.log(`Item ${index + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${((produto.precoUnit * produto.qtd) / 100).toFixed(2)}`);
        });

console.log(`Total de itens: ${this.calcularTotalDeItens()} itens
Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}
Desconto: R$ ${(this.calcularDesconto() / 100).toFixed(2)}
Total com desconto: R$ ${((this.calcularTotalAPagar() - this.calcularDesconto()) / 100).toFixed(2)}`)
    },
    calcularTotalDeItens () {
         let quantidadeDeProdutos = 0;
    for (let produto = 0; produto < this.produtos.length; produto++){
       quantidadeDeProdutos += this.produtos[produto].qtd;
     
    }
   return quantidadeDeProdutos;
    },
    calcularTotalAPagar () {
    let totalAPagar = 0;
    for (let produto of this.produtos) {
        totalAPagar += produto.precoUnit * produto.qtd;
    }
    return totalAPagar;
    },
    calcularDesconto () {
    let descontoPorItem = 0;
    let descontoPorPreco = 0;

    const totalItens = this.calcularTotalDeItens();
        let totalEmCentavos = 0;
    for (let produto of this.produtos) {
        totalEmCentavos += produto.precoUnit * produto.qtd;
    }

    if (totalItens > 4) {
    let menorPreco = this.produtos[0].precoUnit;
    for (let i = 1; i < this.produtos.length; i++) {
            if (this.produtos[i].precoUnit < menorPreco) {
                menorPreco = this.produtos[i].precoUnit;
            }
        }
        descontoPorItem = menorPreco;
    }

    if (totalEmCentavos > 10000) {
        descontoPorPreco = totalEmCentavos * 0.10;
    }

    return Math.max(descontoPorItem, descontoPorPreco);
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}



const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

console.log("=== ESTADO INICIAL ===");
carrinho.imprimirResumo();
carrinho.imprimirDetalhe();

console.log("=== ADICIONANDO NOVA BERMUDA (id 2) ===");
carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();
carrinho.imprimirDetalhe();

console.log("=== ADICIONANDO NOVO TENIS (id 3) ===");
carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
carrinho.imprimirDetalhe();

console.log("=== OBJETO CARRINHO CRU ===");
console.log(JSON.stringify(carrinho, null, 2));

console.log("=== TESTE FINAL ===");
console.log("Itens:", carrinho.calcularTotalDeItens());
console.log("Total (centavos):", carrinho.calcularTotalAPagar());
console.log("Desconto (centavos):", carrinho.calcularDesconto());





//função isolada do resumo do carrinho

// function imprimirResumoDoCarrinho(carrinho){
//      let totalAPagar = 0; let quantidadeDeProdutos = 0;
//       for (let produto = 0;produto < carrinho.produtos.length; produto++){
//          quantidadeDeProdutos += carrinho.produtos[produto].qtd;
//           totalAPagar += carrinho.produtos[produto].precoUnit * carrinho.produtos[produto].qtd;
//          }
//           totalAPagar = (totalAPagar / 100).toFixed(2)
//            console.log(`Cliente: ${carrinho.nomeDoCliente} Total de itens: ${quantidadeDeProdutos} Total a pagar: R$${totalAPagar}`) 
//         } 
        
//função isolada de adicionar produto ao carrinho

// function addProdutoAoCarrinho (carrinho, produto){
//      let produtoExistente = false;
//       for (let i of carrinho.produtos){
//          if (i.id === produto.id) {
//              i.qtd += produto.qtd;
//               produtoExistente = true;
//                break;
//              } 
             
//             } 
//         if (!produtoExistente) {
//                  carrinho.produtos.push(produto) 
//                 } 
//         }