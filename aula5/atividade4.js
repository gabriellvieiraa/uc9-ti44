const input = require("../input");

(async()=>{

console.log("Valor total da compra: ");

let totalCompra = (await input());

switch(true){
    case totalCompra >= 100: 
        console.log("Desconto de 20% aplicado, total de R$ " +(totalCompra - totalCompra * 0.2));
        break;

    case totalCompra >= 50 && totalCompra < 100:
        console.log("Desconto de 10& aplicado, total de R$ " +(totalCompra - totalCompra * 0.1));
        break;

    case totalCompra >= 20 && totalCompra < 50:
        console.log("Desconto de 5% aplicado, total de R$ " +(totalCompra - totalCompra * 0.05));
        break;
    
    default:
        console.log("Sem desconto, valor muito baixo");

}

})();