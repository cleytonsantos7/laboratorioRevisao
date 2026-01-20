const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(fila, nome) {
    fila.push(nome);
    console.log(fila.join(', '));
};

agendarPaciente(pacientes, 'Netinho de Paula');


function atenderPaciente(fila) {
    const pacienteAtendido = fila.shift();
    if (pacienteAtendido) {
        console.log(`Atendimento a ${pacienteAtendido} concluído.`);
    } else {
        console.log('Não há pacientes na fila.');
    }
    console.log(fila.join(', '));
};

atenderPaciente(pacientes);