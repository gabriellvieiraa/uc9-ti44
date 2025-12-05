const input = require("../input");


(async()=>{
    
    for(let ale=-1, num, i=0;ale != num && i < 10;i++){;
       ale = Math.floor(Math.random()*11);
       console.log("Digite um número: ");
       num = Number(await input());
     
    }

})();