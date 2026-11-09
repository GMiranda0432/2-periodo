import { Cliente } from "./Cliente.js";

export class Conta {
    static #qtContas = 0; //atributo estático, da classe e não da instância da classe
    #id;
    #saldo;
    #limiteCredito;
    #titular;

    constructor(cliente, saldo = 0.0, limiteCredito = 100.0) {
        this.titular = cliente; //ATENÇÃO: chama o método set cliente
        
        this.#saldo = saldo < 0.0 ? 0.0 : saldo;
        this.#limiteCredito = limiteCredito < 0.0 ? 0.0 : limiteCredito;

        Conta.#qtContas++; //ATENÇÃO: não usa o this, mas Conta

        this.#id = "" + new Date().getFullYear() + Conta.#qtContas;
    }


    static get qtContas() {
        return Conta.#qtContas;
    }

    get id() {
        return this.#id;
    }

    get titular() {
        return this.#titular;
    }

    set titular(cliente) {
        if (cliente != undefined && cliente instanceof Cliente) {
            this.#titular = cliente;
            return cliente;
        }
        return null;
    }

    get limiteCredito() {
        return this.#limiteCredito;
    }

    set limiteCredito(valor) {
        this.#limiteCredito = valor;
    }

    saldo() {
        return this.#saldo;
    }

    limiteDisponivel() {
        return (this.#limiteCredito + this.#saldo);
    }

    sacar(valor) {
        if (valor <= this.#saldo + this.#limiteCredito) {
            this.#saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor) {
        if (valor > 0.0){
            this.#saldo += valor;
            return true;
        }
        return false;
    }

    transferir(valor, contaDestino) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }

    toString() {
        return ("Nº Conta = " + this.#id +
            "\nTitular = " + this.#titular.toString() +
            "\nSaldo = R$" + this.#saldo.toFixed(2) +
            "\nLimite de Crédito = R$" + this.#limiteCredito.toFixed(2));
    }
}

