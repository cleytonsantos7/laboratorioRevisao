const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const agendarPaciente = (lista, nomePaciente) => {
    lista.push(nomePaciente);
    console.log(lista.join(', '));
}

const atenderPaciente = (lista) => {
    lista.shift();
    console.log(lista.join(', '));
}

const cancelarAtendimento = (lista, nomePaciente) => {
    lista.splice(lista.indexOf(nomePaciente), 1);
    console.log(lista.join(', '));
}

agendarPaciente(pacientes, 'Guido');
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, 'João');