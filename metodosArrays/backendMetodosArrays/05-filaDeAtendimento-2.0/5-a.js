const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(fila, nome){
    fila.push(nome)
    console.log(fila.join(', '))
}

agendarPaciente(pacientes, 'Netinho de Paula')