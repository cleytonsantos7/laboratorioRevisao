const numeroCartao = '1111222233334444';

function formatarCartao(numeroCartao) {
  const clean = String(numeroCartao).replace(/\D/g, '');
  if (clean.length < 8) return 'Número de cartão inválido';

  const primeiro = clean.slice(0, 4);
  const ultimo = clean.slice(-4);
  const ocultos = '*'.repeat(Math.max(0, clean.length - 8));
  const masked = `${primeiro}${ocultos}${ultimo}`;

  return masked.replace(/(.{4})(?=.)/g, '$1 ');
}
  
  console.log(formatarCartao(numeroCartao));