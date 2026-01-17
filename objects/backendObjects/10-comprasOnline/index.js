const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }


jose.carrinho.push(
    { item: tv, quantidade: 1 },
    { item: caboUsb, quantidade: 2 },
    { item: webcam, quantidade: 1 }
);


carlos.carrinho.push(
    { item: notebook, quantidade: 2 }
);


patricia.carrinho.push(
    { item: teclado, quantidade: 1 },
    { item: caboUsb, quantidade: 2 },
    { item: carregador, quantidade: 1 },
    { item: mouse, quantidade: 1 },
    { item: monitor, quantidade: 1 }
);


renato.carrinho.push(
    { item: webcam, quantidade: 5 }
);


roberto.carrinho.push(
    { item: webcam, quantidade: 1 },
    { item: caboUsb, quantidade: 2 },
    { item: monitor, quantidade: 1 }
);

console.log(patricia);
console.log(carlos);
console.log(renato);
console.log(jose);
console.log(roberto);



// 1. Calcular o total do carrinho
function calcularTotal(carrinho) {
    let total = 0;

    for (const produto of carrinho) {
        total += produto.item.valorEmCentavos * produto.quantidade;
    }

    return total; // ainda em centavos
}

// 2. Aplicar desconto por quantidade 
function aplicarDescontos(carrinho) {
    let total = 0;

    for (const produto of carrinho) {
        let subtotal = produto.item.valorEmCentavos * produto.quantidade;

        if (produto.quantidade > 4) {
            subtotal *= 0.9; // aplica 10% de desconto
        }

        total += subtotal;
    }

    return total;
}

// 3. Transformar de centavos para reais
function formatarReais(valorEmCentavos) {
    return (valorEmCentavos / 100).toFixed(2).replace('.', ',');
}

// 4. Gerar resumo da compra
function gerarResumo(cliente) {
    let total = calcularTotal(cliente.carrinho);

    console.log(`Cliente: ${cliente.nome}`);
    console.log("Itens comprados:");

    for (const produto of cliente.carrinho) {
        console.log(`- ${produto.item.nome} x${produto.quantidade}`);
    }

    console.log(`Total: R$ ${formatarReais(total)}`);
}

// 5. Frete grátis para compras acima de X
function verificarFreteGratis(totalEmCentavos) {
    const limite = 2000 * 100; // 2000 reais

    if (totalEmCentavos >= limite) {
        return true;
    }

    return false;
}

// function fecharCompra(cliente) {
//     const total = aplicarDescontos(cliente.carrinho);
//     const totalFormatado = formatarReais(total);
//     const freteGratis = verificarFreteGratis(total);

//     console.log(`Resumo da compra de ${cliente.nome}`);
//     console.log("-------------------------------------");

//     for (const produto of cliente.carrinho) {
//         console.log(`${produto.item.nome} x${produto.quantidade}`);
//     }

//     console.log("-------------------------------------");
//     console.log("Total: R$ " + totalFormatado);

//     if (freteGratis) {
//         console.log("Frete: GRÁTIS");
//     } else {
//         console.log("Frete: R$ 29,90 (exemplo)");
//     }
// }