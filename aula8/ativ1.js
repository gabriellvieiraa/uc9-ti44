function soma(n1, n2=0){
    return n1 + n2
}

let conta = soma(2, 2); //4
console.log(conta)

console.log("Soma é: " + soma(5, 6)  ) ;

const {random}  = require('./marcius')

let ale1 = random(10);
let ale2 = random(10);
console.log("Soma aleatoria é: " + soma(ale1, ale2)  ) ;