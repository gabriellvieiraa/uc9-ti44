const {validaCPF} = require('./gabriel');
const input = require('../input');


(async()=>{

    console.log("Digite seu cpf: ");
    let cpf = await input();

    if(validaCPF(cpf)){
        console.log("CPF válido");

    }else{
        console.log("CPF inválido");
    
    }
    
})();