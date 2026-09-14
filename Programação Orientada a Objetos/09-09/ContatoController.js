import { Contato } from "./Contato.js";

export class ContatoController {
    #vetContatos;

    constructor(vetorContatos = []) {
        this.#vetContatos = vetorContatos.slice();
        vetorContatos.find
    }

    cadastrarContato(descNome, descEndereco, descTelefone, descCpf, dtNascimento) {
        let contato = this.pesquisarContatoNome(descNome);

        if (contato == undefined) {
            if (this.pesquisarContatoTelefone(descTelefone) == undefined) {
                this.#vetContatos.push(new Contato(descNome, descEndereco, descTelefone, descCpf, dtNascimento));
                return true;
            }
        }
        return false;
    }

    pesquisarContatoNome(nome) {
        return this.#vetContatos.find(
            (contato) => contato.name.toUpperCase() == nome.toUpperCase()
        );
    }

    pesquisarContatoTelefone(telefone) {
        return this.#vetContatos.find(
            (contato) => contato.phone == telefone
        );
    }

    #posicaoContato(nome) {
        return this.#vetContatos.findIndex((contato) =>
            contato.name.toUpperCase() == nome.toUpperCase()
        );
    }

    excluirContato(nome) {
        let posicao = this.#posicaoContato(nome);

        if (posicao >= 0) {
            this.#vetContatos.splice(posicao, 1);
            return true;
        }
        return false;
    }

    alterarContato(nome, endereco, telefone, dtNascimento) {
        let posicao = this.#posicaoContato(nome);

        if (posicao >= 0) {
            if (this.pesquisarContatoTelefone(telefone) == undefined) {
                this.#vetContatos[posicao].address = endereco;
                this.#vetContatos[posicao].phone = telefone;
                this.#vetContatos[posicao].birthDay = dtNascimento;
                return this.#vetContatos[posicao];
            }
        }
        return undefined;
    }

    criarTableContatosHtml(ordenado = false) {
        var table;
        if (this.#vetContatos.length > 0) {
            var vetContatos = this.#vetContatos;
            if (ordenado == true) {
                vetContatos = this.#vetContatos.slice().sort(
                    (a, b) => a.name.localeCompare(b.name)
                );
            }

            table = document.createElement("table");
            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");

            var vetTableHead = ["Nome", "Endereço", "Telefone", "CPF", "Data de Nascimento"];
            for (let i = 0; i < vetTableHead.length; i++) {
                let th = document.createElement("th");
                th.textContent = vetTableHead[i];
                thead.appendChild(th);
            }

            table.appendChild(thead);

            for (let lin = 0; lin < vetContatos.length; lin++) {
                let tr = document.createElement("tr");

                let tdNome = document.createElement("td");
                tdNome.textContent = vetContatos[lin].name;

                let tdEndereco = document.createElement("td");
                tdEndereco.textContent = vetContatos[lin].address;

                let tdTelefone = document.createElement("td");
                tdTelefone.textContent = vetContatos[lin].phone;

                let tdCPF = document.createElement("td");
                tdCPF.textContent = vetContatos[lin].cpf;

                let tdDataNascimento = document.createElement("td");
                tdDataNascimento.textContent = vetContatos[lin].birthDay;

                tr.appendChild(tdNome);
                tr.appendChild(tdEndereco);
                tr.appendChild(tdTelefone);
                tr.appendChild(tdCPF);
                tr.appendChild(tdDataNascimento);

                tbody.appendChild(tr);

            }
            table.appendChild(tbody);

            return table;
        } else {
            return undefined;
        }
    }

    obterEstatisticas() {
        let total = this.#vetContatos.length;
        let contatosComCpf = this.#vetContatos.filter((contato) => contato.cpf != "").length;
        let contatosSemCpf = total - contatosComCpf;

        return {
            total: total,
            contatosComCpf: contatosComCpf,
            contatosSemCpf: contatosSemCpf
        };
    }


    salvarContatos() {
        if (this.#vetContatos.length > 0) {
            var strJSONVetContatos = "[" + this.#vetContatos[0].stringify();
            for (let i = 1; i < this.#vetContatos.length; i++) {
                strJSONVetContatos += "," + this.#vetContatos[i].stringify();
            }
            strJSONVetContatos += "\n]";

            localStorage.setItem("contatosSalvos", strJSONVetContatos)
            return true;

        } else {
            console.log("Vetor de Contatos Vazio! Arquivo não gravado!")
            return false;
        }
    }

    carregarContatos() {
        let vetContatosSalvos = [];
        if (localStorage.hasOwnProperty("contatosSalvos")) {
            let strJSONVetContatos = localStorage.getItem("contatosSalvos");
            vetContatosSalvos = JSON.parse(strJSONVetContatos);
        }

        if (vetContatosSalvos.length > 0) {
            for (let i = 0; i < vetContatosSalvos.length; i++) {
                this.#vetContatos.push(
                    new Contato(vetContatosSalvos[i].name, vetContatosSalvos[i].address,
                        vetContatosSalvos[i].phone, vetContatosSalvos[i].cpf, vetContatosSalvos[i].birthDay));
            }
        }
    }
}