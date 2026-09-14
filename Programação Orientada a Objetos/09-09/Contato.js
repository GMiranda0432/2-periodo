export class Contato {
    #name;
    #address;
    #phone;
    #cpf;
    #birthDay;

    static #contContatos = 0;

    constructor(name, address = "", phone = "", cpf = "", birthDay = "01/01/2000") {
        this.#name = name.toUpperCase();
        this.#address = address.toUpperCase();
        this.#phone = phone;
        this.#cpf = cpf;
        this.#birthDay = birthDay;
        Contato.#contContatos++;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        if (newName != "") {
            this.#name = newName.toUpperCase();
        }
    }

    get address() {
        return this.#address;
    }

    set address(newAddress) {
        if (newAddress != "") {
            this.#address = newAddress.toUpperCase();
        }
    }

    get phone() {
        return this.#phone;
    }

    set phone(newPhone) {
        if (newPhone.length == 11) {
            this.#phone = newPhone;
        }
    }

    get cpf() {
        return this.#cpf;
    }

    get birthDay() {
        return this.#birthDay;
    }

    set birthDay(newBirthDay) {
        if (newBirthDay.length == 10) {
            this.#birthDay = newBirthDay;
        }
    }

    static get contContatos() {
        return Contato.#contContatos;
    }

    toString() {
        return "Nome: " + this.#name +
            "\nTelefone: " + this.#phone +
            "\nEndereço: " + this.#address +
            "\nCPF: " + this.#cpf +
            "\nAniversário : " + this.#birthDay;
    }

    stringify() {
        return '\n{' +
            '\n\t"name" : "' + this.#name + '" ,' +
            '\n\t"address" : "' + this.#address + '" ,' +
            '\n\t"phone" : "' + this.#phone + '" ,' +
            '\n\t"cpf" : "' + this.#cpf + '" ,' +
            '\n\t"birthDay" : "' + this.#birthDay + '"' +
            '\n}';
    }
}