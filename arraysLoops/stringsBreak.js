const name1 = "simpsomHomer"
let hasH =  false


for(let n of name1){
    if(n === "H"){
        hasH = true
            break 
    }
}

if(hasH){
    console.log("Tem a letra H.")
}
else {
    console.log("Não tem a letra H.")
}
