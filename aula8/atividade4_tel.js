const {validaTelefone} = require('./gabriel');
const input = require('../input');


(async()=>{

    console.log("Digite seu número de telefone: ");
    let telefone = await input();

    if(validaTelefone(telefone)){
        console.log("Tel válido");

    }else{
        console.log("Tel inválido");
    
    }
    
})();