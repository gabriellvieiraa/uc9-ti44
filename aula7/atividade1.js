const input = require("../input");

(async()=>{

do{
    console.log("Deseja continuar o prgrama? (sim) ");
    var continuar = await input(); //usando o var a variável escapa pra fora das chaves e funciona 
}while(continuar == "sim");

})();
