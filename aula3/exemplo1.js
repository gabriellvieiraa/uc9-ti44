const input = require("../input");

(async() => {

    console.log("Quantos anos você? ");
    let idade = await input();

    if(idade < 18){
        console.log("Bloqueado");
    }else{
        console.log("Bem vindo");
    }

    if(idade >= 18){
        console.log("Bem vindo");
    }else{
        console.log("Bloqueado");
    }

})();