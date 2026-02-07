const somar = (req, res) => {
    const {num1, num2} = req.query
    let resultado = 0;

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))){
        resultado = Number(num1) + Number(num2)
        return res.send(resultado)
    }

    return res.send('Números inválidos');
};

const subtrair = (req, res) => {
    const {num1, num2} = req.query
    let resultado = 0;

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))){
        resultado = Number(num1) - Number(num2)
        return res.send(resultado)
    }

    return res.send('Números inválidos');
};

const multiplicar = (req, res) => {
    const {num1, num2} = req.query
    let resultado = 0;

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))){
        resultado = Number(num1) * Number(num2)
        return res.send(resultado)
    }

    return res.send('Números inválidos');
};

const dividir = (req, res) => {
    const {num1, num2} = req.query
    let resultado = 0;

    if(!isNaN(Number(num1)) && !isNaN(Number(num2))){
        resultado = Number(num1) / Number(num2)
        return res.send(resultado)
    }

    return res.send('Números inválidos');
};

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};