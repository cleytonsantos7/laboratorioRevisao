const email = "aluno@cubos.academy";

const validarEmail = (email) => {
    let emailValido = true;

    if (email.indexOf('@') < 0){
        emailValido = false;
    } else if (email.indexOf('.') < 0) {
        emailValido = false;
    } else if (email.indexOf('.') === 0) {
        emailValido = false;
    } else if (email.lastIndexOf('.') === email.length) {
        emailValido = false;
    }

    if (emailValido){
        console.log('E-mail válido')
    } else {
        console.log('E-mail inválido')
    }
}


// function validarEmail(email) {
//     if (!email.includes('@')) return 'E-mail inválido';

//     const [usuario, dominio] = email.split('@');

//     if (!usuario || !dominio) return 'E-mail inválido';
//     if (usuario.startsWith('.') || usuario.endsWith('.')) return 'E-mail inválido';
//     if (!dominio.includes('.')) return 'E-mail inválido';
//     if (dominio.startsWith('.') || dominio.endsWith('.')) return 'E-mail inválido';

//     return 'E-mail válido';
// }


// console.log(validarEmail(email));