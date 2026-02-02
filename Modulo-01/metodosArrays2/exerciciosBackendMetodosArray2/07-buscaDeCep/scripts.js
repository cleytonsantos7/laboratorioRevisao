const endereços = [
  { cep: '00111222', rua: "Rua dos Artistas" },
  { cep: '00111333', rua: "Rua Augusta" },
  { cep: '00222444', rua: "Avenida Paralela" },
  { cep: '11222333', rua: "Rua Carlos Gomes" },
];

const pesquisa = `00222444`;

function buscarCep(cep){
const buscarEndereco = endereços.find((pesquisa) => {
    return pesquisa.cep === cep
});

console.log(buscarEndereco.rua)
}

buscarCep(pesquisa)