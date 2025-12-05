const {validarEmail} = require('./gabriel');
const input = require('../input');


(async()=>{

    console.log("Digite seu email: ");
    let email = await input();

    if(validarEmail(email)){
        console.log("EMAIL válido");

    }else{
        console.log("EMAIL inválido");
    
    }
    
})();