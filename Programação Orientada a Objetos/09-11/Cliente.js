export class Cliente {
    #nome;
    #cpf;
    #dtNascimento;

    constructor(name, cpf, data = "2000/01/01") {
        this.#nome = name.toUpperCase();
        this.#cpf = cpf;
        this.dtNascimento = data;
    }

    get nome() {
        return this.#nome;
    } 

    set nome(novoNome) {
        if (newName != "") {
            this.#nome = novoNome.toUpperCase();
        }        
        return novoNome;
    }
    
    get cpf() {
        return this.#cpf;
    }

    get dtNascimento() {
        return this.#dtNascimento;
    }

    set dtNascimento(data) {
        if (data != undefined || data != "" || data.length == 10) {
            this.#dtNascimento = data;
        }
        return data;
    }

    toString(){
        return "Nome: " + this.#nome +
            "\nCPF: " + this.#cpf +
            "\nNascimento : " + this.#dtNascimento;
    }

    stringify(){
        return '\n{' + 
                '\n\t"nome" : "' + this.#nome + '" ,' + 
                '\n\t"cpf" : "' + this.#cpf + '" ,' +
                '\n\t"dtNascimento" : "' + this.#dtNascimento + '"' +
                '\n}'; 
    }
}