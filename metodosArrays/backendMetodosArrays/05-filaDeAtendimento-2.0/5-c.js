// c) Crie uma função `cancelarAtendimento` que receberá o array de pacientes 
// e o paciente que deseja cancelar o antendimento. A função deverá remover o
//  paciente que deseja cancelar da fila de atendimento.


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

function cancelarAtendimento (fila, paciente) {
    const cancelar = fila.indexOf(paciente)
    
    if (cancelar !== -1) {
        fila.splice(cancelar, 1);
        console.log(`Atendimento de ${paciente} cancelado.`);
    } else {
        console.log(`${paciente} não está na fila.`);
    }
    console.log(fila.join(', '));
}

cancelarAtendimento(pacientes, 'Joana')