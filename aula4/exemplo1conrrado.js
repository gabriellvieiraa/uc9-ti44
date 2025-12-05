const input = require("../input");

//Atividade bancária

(async ()=>{

    let saldo = 300

    console.log("Bem vindo ao Conradito's Bank!");
    console.log("Digite 1 para depositar ou 2 para sacar: ");
    let resposta = await input(); 

    console.log("Digite o valor: ");
    let valor = Number(await input());

    if( resposta == "1" ){ //Depósito

        if(valor >= 1){
            saldo += valor
        }else{
            console.log("O valor mínimo é de R$ 1");
        }

    }else if(resposta == "2");{ //Saque
        
        if(valor >= 2){
            saldo -= valor
            console.log("O saque mínimo é de R$ 2");
        }else{
            console.log("Valor de saque não atingiu o mínimo necessário")
            
        }

    }

    console.log("Operação realizada com sucesso! ");
    console.log(`Valor atual na conta: R$ ${saldo}`);

})();