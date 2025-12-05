const input = require("../input");

(async()=>{

    let ale
    let num
    let i = 0
    do{
       ale = Math.floor(Math.random()*11);
       console.log("Digite um número: ");
       num = Number(await input());
       //i = i + 1;
       //i += 1;
       i++
    }while(ale != num && i < 10);

})();