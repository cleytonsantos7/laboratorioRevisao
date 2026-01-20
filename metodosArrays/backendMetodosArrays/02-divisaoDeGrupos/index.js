const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function dividirEmGrupos(nomes, tamanhoDoGrupo) {
  const grupos = [];
  for (let i = 0; i < nomes.length; i += tamanhoDoGrupo){
    grupos.push(nomes.slice(i, i + tamanhoDoGrupo))
  }
  grupos.forEach((grupo, indice) => {
        console.log(`Grupo ${indice + 1}: ${grupo.join(', ')}.`);
  });
};

dividirEmGrupos(nomes, tamanhoDoGrupo)