const pessoas = ['joao', 'ana', 'carlos', 'beatriz'];

console.log('--- Ordem Crescente ---')
pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas);

console.log('--- Ordem Decrescente ---')
pessoas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(pessoas);