const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function gerenciarFila(fila, operacao, nome) {
    if (operacao === 'agendar') {
        fila.push(nome);
    } else if (operacao === 'atender') {
        const pacienteAtendido = fila.shift();
        if (pacienteAtendido) {
            console.log(`Atendimento a ${pacienteAtendido} concluído.`);
        } else {
            console.log('Não há pacientes na fila.');
        }
    }
    console.log(fila.join(', '));
};

gerenciarFila(pacientes, 'atender');
gerenciarFila(pacientes, 'agendar', 'Netinho de Paula')