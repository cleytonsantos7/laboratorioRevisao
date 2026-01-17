// Formata números de celular/telefone brasileiros
function formatarCelular(celular) {
  const clean = String(celular).replace(/\D/g, ''); // remove tudo que não for dígito

  // casos esperados:
  // 8 dígitos  -> 9XXXX-XXXX (adiciona 9 na frente)
  // 9 dígitos  -> 9XXXX-XXXX
  // 10 dígitos -> DD + 8 dígitos -> (DD) 9 XXXX-XXXX
  // 11 dígitos -> DD + 9 dígitos -> (DD) 9 XXXXX-XXXX

  if (clean.length === 8) {
    return clean.replace(/(\d{4})(\d{4})/, '9 $1-$2');
  }

  if (clean.length === 9) {
    return clean.replace(/(\d{5})(\d{4})/, '$1-$2');
  }

  if (clean.length === 10) {
    const ddd = clean.slice(0, 2);
    const parte1 = clean.slice(2, 6); // 4 dígitos
    const parte2 = clean.slice(6);    // 4 dígitos
    return `(${ddd}) 9 ${parte1}-${parte2}`;
  }

  if (clean.length === 11) {
    const ddd = clean.slice(0, 2);
    const parte1 = clean.slice(2, 7); // 5 dígitos
    const parte2 = clean.slice(7);    // 4 dígitos
    return `(${ddd}) ${parte1}-${parte2}`;
  }

  return 'Número inválido';
}

// testes
console.log(formatarCelular(7199918888));        // (71) 99918-888
console.log(formatarCelular('99918888'));         // 9 9991-8888
console.log(formatarCelular('999188888'));        // 99918-8888
console.log(formatarCelular('71999188888'));      // (71) 99918-8888
console.log(formatarCelular('(71) 99918-8888'));  // (71) 99918-8888
console.log(formatarCelular('123'));              // Número inválido
