const texto = "Aprenda programar do zero na Cubos Academy";

const transformarTextoEmUrl = (texto) => {
  let url = '';

  const arrayPalavras = texto.split(' ');

  for (let i = 0; i < arrayPalavras.length; i++) {
    if (i > 0) {
      url += `-${arrayPalavras[i]}`;
  } else {
    url += `${arrayPalavras[i]}`;
  }
  }
  console.log(url.toLowerCase());
}

transformarTextoEmUrl(texto)




// const texto = "Aprenda programar do zero na Cubos Academy";

// function textoParaURL(texto) {
//   if (typeof texto !== 'string') texto = String(texto);

//   return texto
//     .toLowerCase()
//     .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
//     .replace(/[^a-z0-9\s-]/g, '')                     // permite letras, números, espaços e hífen
//     .trim()
//     .replace(/\s+/g, '-')                             // espaços → hífen
//     .replace(/-+/g, '-')                              // colapsa hífens múltiplos
//     .replace(/^-+|-+$/g, '');                         // remove hífens nas bordas
// }

// console.log(textoParaURL(texto));