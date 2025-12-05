//aula de laço repetição

let contador = 0
let continuar_loop = true //bool

while(continuar_loop == true){ //se for verdadeiro o programa sempre vai volatr pro while
    contador++ //aumenta o valor da variável em exatamente 1
    //console.log("Olá, boa noite! Repetiu "+contador+" vezes")

    if(contador == 1000000){
        console.log("Passou um mulhão e o palmeiras continua sem mundial")
        continuar_loop = false
       //break
    }

}