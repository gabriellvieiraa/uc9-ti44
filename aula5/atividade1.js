const input = require("../input");

(async()=>{

console.log("---------Cardápio--------");
console.log(" ")
console.log("Digite 1 para X-Salada");
console.log(" ")
console.log("Digite 2 para X-Burguer");
console.log(" ")
console.log("Digite 3 para Misto quente");
console.log(" ")
console.log("Digite 4 para suco natural");
console.log(" ")
console.log("Digite 5 para refrigerante");
console.log(" ")

let pedido = Number(await input());

switch(pedido){

    case 1:
        console.log("Você escolheu um X-Salada");
        break;

    case 2:
        console.log("Você escolheu um X-Burguer");
        break;

    case 3:
        console.log("Você escolheu um Misto quente");
        break;

    case 4:
        console.log("Você escolheu um Suco natural");
        break;

    case 5:
        console.log("Você escolheu um Refrigerante");
        break;
        
    default:
        console.log("Opção inválida, tente novamente");


    }
})();