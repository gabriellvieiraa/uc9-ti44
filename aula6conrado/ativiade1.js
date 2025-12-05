let prompt = require("prompt-sync")()

let numero = 9
let tentativas = 0

while(tentativas < 3){ 
    
    numero = Number(prompt("Digite um número entre 1 e 10: "))

    if(numero == resposta){
        console.log("Você acertou!")
        break
        
    }else{
        console.log("Você errou, tente novamente")
        tentativas++
        
    }

    if (numero !== resposta) {
    console.log(`Fim de jogo. O número correto era ${resposta}.`)
}
}