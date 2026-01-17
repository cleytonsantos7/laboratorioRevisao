const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar (valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor: valor
            })
        return  `Deposito de R$${valor / 100} realizado para o cliente: ${this.nome}`
    },
    sacar (valor){
        if (valor < this.saldo) {
            this.saldo = this.saldo - valor
            this.historicos.push({
    tipo: "Saque",
    valor: valor
})
        return `Saque de R$${valor / 100} realizado para o cliente: ${this.nome}`
        } else {
        return `Saldo insuficiente para o saque de: ${this.nome}`
        }
    },
    extrato (){
        let linhas = [];

    for (let transacao of this.historicos) {
        linhas.push(
            `${transacao.tipo} de R$${transacao.valor / 100}`
        );
    }

    return `Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}
Histórico:
${linhas.join("\n")}`;
    }
}



console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());


// **h)** Para testar sua implementação faça as seguintes chamadas:

// ```javascript=
// console.log(contaBancaria.depositar(10000));
// console.log(contaBancaria.sacar(50000));
// console.log(contaBancaria.sacar(5000));
// console.log(contaBancaria.extrato());
// ```

// Isso deve imprimir o seguinte resultado:

// ```
// Deposito de R$100 realizado para o cliente: Maria
// Saldo insuficiente para o saque de: Maria
// Saque de R$50 realizado para o cliente: Maria
// Extrato de Maria - Saldo: R$50
// Histórico:
// Depósito de $100
// Saque de $50