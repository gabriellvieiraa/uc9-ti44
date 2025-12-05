console.log("Olá mundo");

var nome = "Gabriel"
// estou fazendo uma concatenação
console.log("Olá "+nome);

var idade = 19;
// estou fazendo uma interpolação
/*
"" - aspas
'' - apostrofe
`` - crase
*/
console.log(`Olá ${nome}, sua idade é ${idade}`);

/*
() - parenteses
[] - colchetes - para vetores
{} - chaves - para extrutura ou contexto
 */

//camalcase
var cestaCafe = []; //estou declarando um vetor
cestaCafe[0] = "cafe"; //uma atribuição
cestaCafe[1] = "ovo";

//undercase
var cesta_cafe = ["café", "ovo"];

cestaCafe.push("bacon");
cesta_cafe.push("pão");

console.log(cestaCafe);
console.log(cesta_cafe);


//atividade

var usuario = ["Gabriel", "idade 19", "telefone 8567999"];
console.log(usuario);


console.log("idade: "+usuario[2]);
// estrutura, dicionário, classe anonima
var usuario = {
    nome: "Gabriel",
    idade: "19",
    telefone: "8567999"
} 

console.log(usuario);


//atividade 2

var lista_telefonica = [];

lista_telefonica.push({
    nome: "Gabriel",
    telefone: "8567999",
    endereço: "Rua qualquer"
});

lista_telefonica.push({
    nome: "Cristiano",
    telefone: "8567999",
    endereço: "Rua qualquer"
});

console.log(lista_telefonica);


//atividade 3 

var produtos = [];

produtos.push({
    nome:"feijão",
    valor:10,
    cod:"0808080"

});

produtos.push({
    nome:"arroz",
    valor:9,
    cod:"63287499"

});

console.log(produtos[0].valor + produtos[1].valor
);

//atividade 4

var alunos = [];

alunos.push({
    nome: "Letícia",
    nota: 8

});

alunos.push({
    nome: "Neymar",
    nota: 9

});

alunos.push({
    nome: "Garro",
    nota: 7

});

console.log(alunos);

var media = alunos[0].nota + alunos[1].nota + alunos[2].nota;
console.log("A média de nota da sala é "+media/3)




