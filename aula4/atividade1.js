
const input = require("../input");

(async()=>{

let pao ;
let salsicha;
let bacon;
let pure;
let salada;
let batataPalha;

console.log("Ao dono do estabelecimento digite o valor dos produtos")

console.log("Diite o valor do pao")
pao = Number(await input())

console.log("Digite o valor da salsicha")
salsicha = Number(await input())

console.log("Digite o valor do bacon")
bacon = Number(await input())

console.log("Digite o valor do pure de batata")
pure = Number(await input())

console.log("Digite o valor da salada")
salada= Number(await input())

console.log("Digite o valor da batataPalha")
batataPalha = Number(await input())

console.log("-----------------------------------------------------")
//-------------------parte do cliente---------------------//

console.log("Caro cliente monte seu dogao")

console.log(" ")

console.log("-----------------cardapio-------------")

console.log(" ")

console.log("digite 1 para : Hotdog simples Salsicha e pure")

console.log(" ")

console.log("Digite 2 para : Dog Salada Salsicha e salada")

console.log(" ")

console.log("Digite 3 para : Dog Duplo Especial Duas salsichas, purê e bacon")

console.log(" ")

console.log("Digite 4 para : Dog-Tudo Duas salsichas, purê em dobro, bacon, salada")

console.log(" ")

console.log("Digite o numero do seu pedido:")
let pedido = Number(await input())
console.log("Digite o valor do desconto:")
let desconto = Number(await input())

    if(pedido == 1)
    {
        dogSimples = (pao + pure + batataPalha + salsicha)
        console.log("Valor do seu pedido é "+ dogSimples)
        console.log("Aplicando o desconto")
        dogSimples = dogSimples-(desconto/ 100 * dogSimples)
        console.log(`O valor total foi de : ${dogSimples}`)

        let valorCusto = pao + pure + batataPalha + salsicha - desconto

        console.log("Valor do custo" + valorCusto)
    }
    else if(pedido ==2)
    {
        dogSalada = (pao + pure + batataPalha + salsicha + salada)
        console.log("Valor do seu pedido é "+ dogSalada)
        console.log("Aplicando o desconto")
        dogSalada = dogSalada-(desconto/ 100 * dogSalada)
        console.log(`O valor total foi de : ${dogSalada}`)

        let valorCusto = pao + pure + batataPalha + salsicha + salada - desconto

        console.log("Valor do custo" + valorCusto)
    }
    else if(pedido ==3)
        {
            dogDuplo = (pao + pure + batataPalha + salsicha + salsicha + bacon)
            console.log("Valor do seu pedido é "+ dogDuplo)
            console.log("Aplicando o desconto")
            dogDuplo = dogDuplo-(desconto/ 100 * dogDuplo)
            console.log(`O valor total foi de : ${dogDuplo}`)

            let valorCusto = pao + pure + batataPalha + salsicha + salsicha + bacon - desconto

            console.log("Valor do custo" + valorCusto)
        }
    else if(pedido ==4)
            {
                dogTudo = (pao + pure + batataPalha + salsicha + salsicha + bacon +salada + pure )
                console.log("Valor do seu pedido é "+ dogTudo)
                console.log("Aplicando o desconto")
                dogTudo = dogTudo-(desconto/ 100 * dogTudo)
                console.log(`O valor total foi de : ${dogTudo}`)

                let valorCusto = pao + pure + batataPalha + salsicha + salsicha + bacon +salada + pure - desconto

                console.log("Valor do custo" + valorCusto)
            }
      

})();