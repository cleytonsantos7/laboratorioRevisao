let haveTicket = false;
let censorshipAge = 16;
let age = 14;
let accompanied = false;


if(haveTicket) {
    if(age >= censorshipAge || (age < censorshipAge && accompanied)) {
        console.log("Você pode assistir ao filme.");
    } else {
        console.log("Você não pode assistir ao filme, devido a censura.");
    } 
} else {
    console.log("Você não pode assistir ao filme sem um ingresso.");
}

//outro teste

if(haveTicket && age >= censorshipAge || (age < censorshipAge && accompanied)) {
    console.log("Você pode assistir ao filme.");
} else {
    if(!haveTicket) {
        console.log("Você não pode assistir ao filme sem um ingresso.");
    } else {
        console.log("Você não pode assistir ao filme, devido a censura.");
    }
}

//terceiro teste

if(haveTicket && age >= censorshipAge || (age < censorshipAge && accompanied)) {
    console.log("Pode entrar.");
} else {
    console.log("Não pode entrar.");
}