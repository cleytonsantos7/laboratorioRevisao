const caractere = "E";
function isVogalMaiuscula(char) {
    return char === "A" || char === "E" || char === "I" || char === "O" || char === "U";
  }
  
  // Função para verificar se o caractere é uma vogal minúscula
  function isVogalMinuscula(char) {
    return char === "a" || char === "e" || char === "i" || char === "o" || char === "u";
  }
  
  // Função para verificar se o caractere é uma consoante
  function isConsoante(char) {
    return /^[A-Za-z]$/.test(char) && !isVogalMaiuscula(char) && !isVogalMinuscula(char);
  }
  
  // Função para verificar se o caractere é um número
  function isNumero(char) {
    return /^[0-9]$/.test(char);
  }
  
  // Função principal para identificar a categoria do caractere
  function identificarCaractere(char) {
    switch (true) {
      case isVogalMaiuscula(char):
        console.log("Vogal maiúscula");
        break;
      case isVogalMinuscula(char):
        console.log("Vogal minúscula");
        break;
      case isConsoante(char):
        console.log("Consoante");
        break;
      case isNumero(char):
        console.log("Número");
        break;
      default:
        console.log("Caractere inválido");
    }
  }
  
  // Chama a função para identificar o caractere
  identificarCaractere(caractere);