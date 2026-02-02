const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const atendimento = (lista, tipoOperacao, nomePaciente) => {
    if (tipoOperacao === 'atender') {
        lista.shift();
    }

    if (tipoOperacao === 'agendar') {
        lista.push(nomePaciente);
    }

    console.log(lista.join(', '));
}

atendimento(pacientes, 'atender');
atendimento(pacientes, 'agendar', 'Guido');