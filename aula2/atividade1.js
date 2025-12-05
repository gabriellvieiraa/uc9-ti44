const input = require("../input");

(async () => {
    console.log("Qual seu nome?: ");
    let nome = await input();

    console.log("Qual sua idade?: ");
    let idade = await input();
    
    console.log(`Olá ${nome}, a sua idade é ${idade}.`)
})();