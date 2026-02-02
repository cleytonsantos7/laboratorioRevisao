const cpf = "12345678900";
const cnpj = "12345678000199";

const validarCpf = (cpf) => {
  if (cpf.length !== 11){
    console.log('Cpf Inválido');
  } else {
    const cpfFormatado = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
    console.log(cpfFormatado);
  }
}

const validarCnpj = (cnpj) => {
  if (cnpj.length !== 14){
    console.log('Cnpj Inválido');
  } else {
    const cnpjFormatado = `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`;
    console.log(cnpjFormatado);
  }
}

validarCpf(cpf)
validarCnpj(cnpj)



// const cpf = "12345678900";
// const cnpj = "12345678000199";

// function formatarCPF(cpf) {
//   if (typeof cpf !== 'string') cpf = String(cpf);
//   const clean = cpf.replace(/\D/g, '');

//   if (clean.length !== 11) return "CPF Inválido";
//   if (/^(\d)\1+$/.test(clean)) return "CPF Inválido"; // opcional

//   return clean.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
// }

// function formatarCNPJ(cnpj) {
//   if (typeof cnpj !== 'string') cnpj = String(cnpj);
//   const clean = cnpj.replace(/\D/g, '');

//   if (clean.length !== 14) return "CNPJ Inválido";
//   if (/^(\d)\1+$/.test(clean)) return "CNPJ Inválido"; // opcional

//   return clean.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
// }

// // testes rápidos
// console.log(formatarCPF("12345678900")); // 123.456.789-00
// console.log(formatarCNPJ("12345678900000")); // 12.345.678/9000-00