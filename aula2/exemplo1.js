//estou fazendo uma importação trazer funções externas
//para este arquivo
const input = require("../input");
//declarei uma variável do tipo chamada input


(async () => {
    console.log("Qual sua idade: ");
    var idade = await input();
    console.log("a sua idade é"+ idade);
})();

//let idade = await input()