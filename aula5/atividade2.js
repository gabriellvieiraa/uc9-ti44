const input = require("../input");

(async()=>{

console.log(" ");
console.log("Tabela de preços");
console.log(" ");
console.log("Digitr 100 para X-Salada: 12,00");
console.log(" ");
console.log("Digite 101 para X-Burguer: 10,00");
console.log(" ");
console.log("Digite 102 para Cachorro-Quente: 8,50");
console.log(" ");
console.log("Digite 103 para Suco: 6,00");
console.log(" ");
console.log("Digite 104 para Refrigerante: 5,00");
console.log(" ");

let codigo = Number(await input());

console.log("Digite a quantidade");
let quantidade = Number(await input());

let valor = 0
let produto = ""


switch(codigo){
    case 100:
        produto = "X-Salada"
        valor = 12
        break;
    
    case 101:
         produto = "X-Burguer"
         valor = 10
        break;

    case 102:
            produto = "Cachorro Quente"
            valor = 8.50
            break;

    case 103:
         produto = "Suco"
         valor = 6
         break;

    case 104:
    produto = "Refrigerante"
    valor = 5
     break;

    default:
        console.log("Código inválido");
        break;


}

console.log(`Você escolheu ${produto}, quantidade ${quantidade}, preço total ${quantidade * valor}`);


})();