import { Conta } from "./Conta.js";

export class Poupanca extends Conta {
    #rendimento;

    constructor(titular, saldo, rendimento) {
        super(titular, saldo);
        this.#rendimento = rendimento;
    }

    get rendimento() {
        return this.#rendimento;
    }

    set rendimento(novoRendimento) {
        this.#rendimento = novoRendimento;
    }

    calcularRendimento() {
        return this.saldo * (this.#rendimento / 100);
    }
}