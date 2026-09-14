import { ContatoController } from "./ContatoController.js";
import { Contato } from "./Contato.js";

const inNome = document.getElementById("inNome");
const inEndereço = document.getElementById("inEndereço");
const inTelefone = document.getElementById("inTelefone");
const inCpf = document.getElementById("inCpf");
const inDtNascimento = document.getElementById("inDtNascimento");

const btOk = document.getElementById("btOk");

const outResultado = document.getElementById("outResultado");

const selectOpcao = document.getElementById("selectOpcao");

const sectionResultado = document.querySelector(".sectionResultado");

const contatoController = new ContatoController(
);

document.addEventListener("DOMContentLoaded", contatoController.carregarContatos());

selectOpcao.addEventListener("change", function () {
    let opcao = selectOpcao.value;

    inNome.disabled = true;
    inNome.placeholder = "";
    inNome.value = "";
    inDtNascimento.disabled = true;
    inDtNascimento.placeholder = "";
    inDtNascimento.value = "";
    inCpf.disabled = true;
    inCpf.placeholder = "";
    inCpf.value = "";
    inTelefone.disabled = true;
    inTelefone.placeholder = "";
    inTelefone.value = "";
    inEndereço.disabled = true;
    inEndereço.placeholder = "";
    inEndereço.value = "";
    outResultado.textContent = "";
    sectionResultado.textContent = "";

    if (opcao != "") {
        verificarOpcao(opcao);
    }
});

function verificarOpcao(opcao) {
    inNome.disabled = false;
    inNome.placeholder = "Digite um nome";
    inNome.value = "";
    switch (opcao) {
        case "Cadastrar":
            inEndereço.disabled = false;
            inEndereço.placeholder = "Digite o Endereço do Contato";
            inTelefone.disabled = false;
            inTelefone.placeholder = "(DD)XXXXX-XXXX";
            inCpf.disabled = false;
            inCpf.placeholder = "XXX.XXX.XXX-XX";
            inDtNascimento.disabled = false;
            inDtNascimento.placeholder = "DD/MM/AAAA";
            break;
        case "Alterar":
            inEndereço.disabled = false;
            inEndereço.placeholder = "Digite o Endereço do Contato";
            inTelefone.disabled = false;
            inTelefone.placeholder = "(DD)XXXXX-XXXX";
            inDtNascimento.disabled = false;
            inDtNascimento.placeholder = "DD/MM/AAAA";
            break;
        case "ConsultarTelefone":
            inNome.disabled = true;
            inNome.placeholder = "";
            inNome.value = "";
            inTelefone.disabled = false;
            inTelefone.placeholder = "Digite um telefone";
            inTelefone.value = "";
            break;

        case "Listar":
        case "ListarOrdenado":
        case "Salvar":
        case "Estatisticas":
            inNome.disabled = true;
            inNome.placeholder = "";
            inNome.value = "";
            inTelefone.disabled = true;
            inTelefone.placeholder = "";
            inTelefone.value = "";
            inCpf.disabled = true;
            inCpf.placeholder = "";
            inCpf.value = "";
            inDtNascimento.disabled = true;
            inDtNascimento.placeholder = "";
            inDtNascimento.value = "";
            inEndereço.disabled = true;
            inEndereço.placeholder = "";
            inEndereço.value = "";
            break;
    }
}

btOk.addEventListener("click", executarFunc);
function executarFunc() {
    let opcao = selectOpcao.value;
    let descNome = (inNome.value);
    let descEndereco = (inEndereço.value);
    let descTelefone = (inTelefone.value);
    let descCpf = (inCpf.value);
    let dtNascimento = (inDtNascimento.value);

    let contatoAux;

    switch (opcao) {
        case "Cadastrar":
            if (descNome == "") {
                outResultado.style.color = "red";
                outResultado.textContent = "Para acrescentar Contato novo, ao menos o campo Nome deve ser preenchido!";
                inNome.focus();
            } else {
                if (contatoController.cadastrarContato(descNome, descEndereco, descTelefone, descCpf, dtNascimento) == true) {
                    outResultado.style.color = "blue";
                    outResultado.textContent = "O novo Contato foi acrescentado com sucesso!";

                } else {
                    outResultado.style.color = "red";
                    outResultado.textContent = `Erro! Já existe um Contato com o Nome ${descNome} ou Telefone ${descTelefone}!`;
                    inNome.focus();
                }
            }
            break;

        case "Excluir":
            if (contatoController.excluirContato(descNome) == true) {
                outResultado.style.color = "blue";
                outResultado.textContent = "O Contato foi excluido com sucesso!";
            } else {
                outResultado.style.color = "red";
                outResultado.textContent = "Erro! O Contato " + descNome + " não foi excluido!";
                inNome.focus();
            }
            break;

        case "Alterar":
            contatoAux = contatoController.pesquisarContatoNome(descNome);

            if (contatoAux != undefined) {

                descEndereco = (descEndereco != "") ? descEndereco : contatoAux.address;
                descTelefone = (descTelefone != "") ? descTelefone : contatoAux.phone;
                dtNascimento = (dtNascimento != "") ? dtNascimento : contatoAux.birthDay;

                contatoAux = contatoController.alterarContato(descNome, descEndereco, descTelefone, dtNascimento);

                if (contatoAux != undefined) {
                    outResultado.style.color = "blue";
                    outResultado.textContent = "O Contato foi alterado com sucesso!";
                } else {
                    outResultado.style.color = "red";
                    outResultado.textContent = "Erro! O Telefone " + descTelefone + " está cadastrado em outro contato!";
                    inTelefone.focus();
                }
            } else {
                outResultado.style.color = "red";
                outResultado.textContent = "Erro! O Contato " + descNome + " não foi encontrado!";
                inNome.focus();
            }
            break;

        case "ConsultarDados":
            contatoAux = contatoController.pesquisarContatoNome(descNome);

            if (contatoAux != undefined) {
                outResultado.style.color = "blue";
                outResultado.textContent = contatoAux.toString();
            } else {
                outResultado.style.color = "red";
                outResultado.textContent = "Não foi encontrato contato com o nome informado!";
            }
            break;

        case "ConsultarTelefone":
            if (descTelefone == "") {
                outResultado.style.color = "red";
                outResultado.textContent = "Erro! Digite um telefone para consultar!";
                inTelefone.focus();
            } else {
                contatoAux = contatoController.pesquisarContatoTelefone(descTelefone);

                if (contatoAux != undefined) {
                    outResultado.style.color = "blue";
                    outResultado.textContent = contatoAux.toString();
                } else {
                    outResultado.style.color = "red";
                    outResultado.textContent = "Não foi encontrado contato com o telefone informado!";
                }
            }
            break;

        case "Listar":
        case "ListarOrdenado":
            let htmlTable = contatoController.criarTableContatosHtml(opcao == "ListarOrdenado");
            if (htmlTable != undefined) {
                sectionResultado.innerHTML = "";
                sectionResultado.appendChild(htmlTable);
            } else {
                outResultado.style.color = "red";
                outResultado.textContent = "Erro!";
                sectionResultado.innerHTML = "";
            }
            break;

        case "Estatisticas":
            let estatisticas = contatoController.obterEstatisticas();
            outResultado.style.color = "blue";
            outResultado.textContent =
                "• Total de contatos cadastrados: " + estatisticas.total + "\n" +
                "• Quantos contatos possuem CPF informado: " + estatisticas.contatosComCpf + "\n" +
                "• Quantos contatos não possuem CPF informado: " + estatisticas.contatosSemCpf;
            break;

        case "Salvar":
            if (contatoController.salvarContatos() == true) {
                outResultado.style.color = "blue";
                outResultado.textContent = "Sucesso ao Salvar Lista de Contatos!";
            } else {
                outResultado.style.color = "red";
                outResultado.textContent = "Erro! Contatos não Salvos no Arquivo!";;
            }
            break;

        default:
            alert("Faltou selecionar uma opção de funcionalidade!");
    }
}


