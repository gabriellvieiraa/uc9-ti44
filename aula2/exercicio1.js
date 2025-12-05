const input = require("../input");

(async () => {
    console.log("Qual seu primeiro nome?: ");
    let nome = await input();

    console.log("Digite seu sobrenome: ");
    let sobrenome = await input();

    let l = sobrenome[0].toUpperCase();
    let minusculo = nome.toLowerCase();
    let saida = minusculo[0].toUpperCase() + minusculo.slice(1);

    console.log(`Citação ${l}. ${saida}`);

})();
