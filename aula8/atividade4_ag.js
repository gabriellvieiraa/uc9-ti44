/*
Faça uma função na biblioteca de vocês que valida email e telefone, e reescreva o programa
de agenda cadastrando o nome, email e telefone válidos.
*/

const input = require("../input"); 
const { validaTelefone, validaEmail } = require("./gabriel.js");

(async()=>{ 
    let agenda = []; 
    let continuar; 
    let emaiL
    do{ 
        console.log("Digite um nome: ")      
        let nomeE = await input(); 

        console.log("Digite um email válido: ")      
        let emaiL = await input(); 

        console.log("Digite um  telefone válido: ")      
        let telE = await input(); 


        if (validaEmail(emaiL) && validaTelefone (telE) ){
            console.log("Email válido")
            console.log("Telefone válido")

            agenda.push(
                { 
                    nome: nomeE,
                    telefone: telE,
                    email: emaiL
                }
            );
            
            console.log("Dseja continuar? (sim)")      
            continuar = (await input()).toLowerCase(); 
            
        }else{
            console.log("Bloqueado");
        }


    }while(agenda.length <=5 && continuar == "sim") 
    console.log(agenda) 
})();