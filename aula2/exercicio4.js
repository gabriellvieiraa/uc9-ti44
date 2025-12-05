const input = require("../input");

(async() => {
    console.log("Digite um número: " );
    let numero = (await input());

resultado = numero * 2

    console.log(`O dobro é: ${resultado}`);

})();