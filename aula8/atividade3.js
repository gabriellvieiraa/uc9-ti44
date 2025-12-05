
    function soma(n1, n2){
        return n1 + n2
    }

    function subtrair(n1, n2){
        return n1 - n2
    }

    function mult(n1, n2){
        return n1 * n2
    }

    function divisor(n1, n2){
        return n1 / n2
    }

    const input = require('../input');

    (async()=>{

        console.log(" ")
        console.log("----Calculadora----")//console.log("\n----Calculadora----\nQual cálculo deseja fazer?\n1 - soma  \n2 - subtração\n3 - multiplicação \n4- divisão")
        console.log(" ")
        console.log(`Qual cálculo deseja fazer?    
            1 - soma
            2 - subtração
            3 - multiplicação
            4- divisão
            `);

        let opcao = await input();
        
        let conta

        switch(opcao){

            case '1': conta = soma; break;
            case '2': conta = subtrair; break;
            case '3': conta = mult; break;
            case '4': conta = divisor; break;
            default: console.log("Opção incorreta, tente novamente"); return;
        }

        if(Number(opcao)>4) return

        console.log("Digite um número")
        let n1 = Number( await input())
        console.log("Digite o segundo número")
        let n2 = Number( await input())

        let resposta = conta(n1, n2)
        console.log("REsposta: "+resposta)

    })();
