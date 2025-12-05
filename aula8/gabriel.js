function random(inferior=0, superior=1, tipo='float'){
    if(superior<inferior)
        {
            console
            .error("Numero superior deve ser maior que o numero");
            return;
        }
        
        switch(tipo){
            case 'float': 
            return Math.random()
            *(superior+1-inferior)+(inferior);
            case 'int': 
            return Math.floor(Math.random()
            *(superior+1-inferior))+(inferior);
        }   
    }

    function validaCPF(cpf) {
        if (!cpf) return false;
      
        // Remove tudo que não for número
        cpf = cpf.replace(/[^\d]+/g, '');
      
        // CPF precisa ter 11 dígitos
        if (cpf.length !== 11) return false;
      
        // Elimina CPFs inválidos conhecidos (111.111.111-11 etc.)
        if (/^(\d)\1+$/.test(cpf)) return false;
      
        // Valida o primeiro dígito verificador
        let soma = 0;
        for (let i = 0; i < 9; i++) {
          soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;
      
        // Valida o segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
          soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(10))) return false;
      
        return true;

    }

    
function validaEmail(email){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validaTelefone(telefone){
    telefone = telefone.replace(/\D/g, ""); // remove tudo exceto números

    return telefone.length === 10 || telefone.length === 11;

}

   

    module.exports = { random, validaCPF, validaEmail, validaTelefone }