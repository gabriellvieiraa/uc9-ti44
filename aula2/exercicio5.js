const input = require("../input");

(async() => {
    console.log("Digite uma frase");
    let frase = await input();

    frase = frase.length

    console.log(`Sua frase tem ${frase} caracteres`);

})();