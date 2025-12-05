const input = require("../input");

(async()=>{

console.log("Digite sua quantidade de pontos: ");

let pontos = await input();

switch(true){
    case pontos < 100:
        console.log("Cliente iniciante, sem benefícios ainda");
        break;

    case pontos >= 100 && pontos < 300:
        console.log("Cliente bronze, você tem direito a um copo de bebida grátis");
        break;

    case pontos >= 300 && pontos < 700:
        console.log("Cliente prata, você tem direito a uma refeição grátis");
        break;

    case pontos >=700:
        console.log("Cliente ouro, parabéns você tem direito a 1 combo grátis por mês!");
        break;

}

})();