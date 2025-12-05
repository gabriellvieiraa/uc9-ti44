const input = require("../input");

(async () => {
    console.log("Digite o primeiro número: ");
    let n1 = Number(await input());

    console.log("Digite o segundo número: ");
    let n2 = Number(await input());

    var soma = n1.valor + n2.valor;
    console.log(`A soma entre ${n1} + ${n2} = ${n1+n2}.`);

})();