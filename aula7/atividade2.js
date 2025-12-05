const input = require("../input");

(async()=>{

    let continuar = "sim"
    while(continuar == "sim"){
        console.log("Deseja continuar o prgrama? (sim) ");
        continuar = await input();
    }

})();