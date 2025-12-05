let prompt = require ("prompt-sync")()

let resposta = 7
let numero = 9


while(numero != resposta){ //vai continuar rodando enquanto o número for diferente da resposta 
    
    numero = Number(prompt("Digite um número: "))

    if(numero == resposta){
        console.log("Você acertou!")
        break
        
    }else{
        console.log("Você errou, acabaram suas tentativas!")
    }

}
