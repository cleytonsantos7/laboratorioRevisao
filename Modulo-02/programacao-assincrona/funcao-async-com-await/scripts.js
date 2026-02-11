const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');

// async / await
(async function(){
    const cidade = await getCityFromZipcode('41256250');

    console.log(cidade);

    // const estado = await getStateFromZipcode('41256250');

    // console.log(estado);
    
})();

//padrão normal
async function teste() {
    return '123'
}

// arrow function
const teste = async () => {};

console.log(teste());




    // getCityFromZipcode('41256250').then(cidade => {
    //     console.log(cidade);
    // }).catch((erro) => {
    //     console.log(erro);
        
    // })

    // getStateFromZipcode('41256250').then(uf => {
    //     console.log(uf);
        
    // })

    