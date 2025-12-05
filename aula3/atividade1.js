const input = require("../input");

(async() => {

    console.log("Qual seu saldo? ");
    let saldo = Number( await input());
    
    console.log("Qual o código do produto? ");
    let produto = Number( await input());

    if(isNaN(saldo)){         
        console.log("Saldo deve ser um número");
    }else if(isNaN(produto)){
        console.log("Deve ser um número para o produto");
    }else if(saldo > 5 && produto == 42){
        console.log("Pegue sua coca-cola!");
    }else{
        console.log(`Vá embora e pegue seu saldo ${saldo}!`);
    }

})();