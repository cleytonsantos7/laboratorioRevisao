function imprimirdata(dia, mes, ano){
   
    const diaFormatado = String(dia).padStart(2, "0");
    const mesFormatado = `${mes}`.padStart(2, "0");
   
    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);

}

imprimirdata(1, 1, 2021);