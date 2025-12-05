const input = require("../input");

(async()=>{

console.log(" ");
console.log("Escolha o tamanho do lanche:");
console.log(" ");
console.log("P - Combo Pequeno escolhido R$ 15.00");
console.log(" ");
console.log("M - Combo Médio escolhido R$ 20.00");
console.log(" ");
console.log("G - Combo Grande escolhido R$ 25.00");
console.log(" ");

let tamanho = await input();

switch(tamanho.toUpperCase()){
    case "P":
        console.log("Combo pequeno");
        break;
        
    case "M":
        console.log("Combo médio");
        break;
    
    case "G":
        console.log("Combo grande");
        break;
    
    default:
        console.log("Código inválido");
        break;
    }

})();