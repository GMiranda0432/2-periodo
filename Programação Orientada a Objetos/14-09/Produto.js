export class Produto {
    #descricao;
    #preco;
    #qtdEstoque;
    #vendasMensais;

    constructor(descricao, preco = 0, qtdEstoque = 0) {
        this.#descricao = descricao;
        this.#preco = preco;
        this.#qtdEstoque = qtdEstoque;
        this.#vendasMensais = new Array(12).fill(0);
    }
    get descricao() {
        return this.#descricao;
    }

    set descricao(descricao) {
        this.#descricao = descricao;
    }

    get preco() {
        return this.#preco;
    }

    set preco(preco) {
        if (preco >= 0) this.#preco = preco;
    }

    get qtdEstoque() {
        return this.#qtdEstoque;
    }

    set qtdEstoque(qtdEstoque) {
        if (qtdEstoque >= 0) this.#qtdEstoque = qtdEstoque;
    }

    get vendasMensais() {
        return [...this.#vendasMensais];
    }
    getQtdVendasMes(mes) {
        if (mes >= 1 && mes <= 12) {
            return this.#vendasMensais[mes - 1];
        }
    }
    setQtdVendasMes(mes, quantidade) {
        if (mes >= 1 && mes <= 12 && quantidade >= 0) {
            this.#vendasMensais[mes - 1] = quantidade;
            return true;
        }
        return false;
    }

    comprar(quantidade) {
        if (quantidade > 0) {
            this.#qtdEstoque += quantidade;
            return true;
        }
        return false;
    }
    vender(quantidade, mes) {
        if (quantidade > 0 && this.#qtdEstoque >= quantidade && mes >= 1 && mes <= 12) {
            this.#qtdEstoque -= quantidade;
            this.#vendasMensais[mes - 1] += quantidade;
            return true;
        }
        return false;
    }
    toString() {
        return `Produto: ${this.#descricao} | Preço: R$ ${this.#preco.toFixed(2)} | Estoque: ${this.#qtdEstoque} | Vendas no Ano: [${this.#vendasMensais.join(', ')}]`;
    }
}