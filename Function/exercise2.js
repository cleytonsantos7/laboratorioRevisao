function faixaEtaria (idade){
    if (idade < 22){
    return "Jovem";
    } else if (idade < 66){
    return "Adulto";
    } else {
    return "Idoso";
    }
}

//const faixaEtariaRetornada = faixaEtaria(21);
console.log(faixaEtaria(21));