import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente_Incompleto.js";
import {Poupanca} from "./Poupanca.js";

/*=====================================================================================
  TAREFA 10 - HERANÇA, SOBRESCRITA E POLIMORFISMO EM JAVASCRIPT

  Leia os comentários de cada PARTE na ordem em que aparecem e siga as instruções.
   - Onde houver "Resposta: ______", escreva sua resposta no próprio comentário.
   - Onde houver "DESAFIO", escreva o código pedido.
  Para executar, abra o arquivo testeHerancaPolimorfismo.html no navegador e acompanhe
  as mensagens no console (F12 --> aba Console).
=====================================================================================*/

//Cliente constructor(name, cpf, birthDay)
const cliente1 = new Cliente("Bruno",  "11122233344", "1997/09/03");
const cliente2 = new Cliente("Milton", "99988877766", "1990/05/20");

/*-------------------------------------------------------------------------------------
  PARTE 1 - UM VETOR DE CONTAS

  O vetor abaixo armazena objetos de duas classes diferentes: ContaCorrente e Poupanca.
  Mesmo assim, podemos chamá-lo de "vetor de Contas", pois as duas classes são subclasses
  de Conta: toda ContaCorrente É UMA Conta, e toda Poupanca É UMA Conta.
  Por isso, nas próximas partes, poderemos tratar todos os elementos do vetor da mesma forma,
  chamando os métodos que toda Conta possui.

  OBS: em JavaScript, um Array não tem tipo definido e poderia guardar qualquer valor.
       Cabe a nós, programadores, garantir que nele sejam inseridas apenas Contas.
-------------------------------------------------------------------------------------*/

//ContaCorrente constructor(cliente, saldo, tarifa, limiteCredito, juros)
//Poupanca      constructor(cliente, saldo, rendimento)
const vetContas = new Array(
    new ContaCorrente(cliente1, 500.00, 10.00, 200.00, 15.00),
    new Poupanca(cliente1, 1000.00, 1.0),
    new ContaCorrente(cliente2, 2000.00, 10.00, 250.00, 15.00),
    new Poupanca(cliente2, 500.00, 1.0)
);

/* QUESTÃO 1
   O operador instanceof verifica se um objeto é instância de uma classe (ou de uma de suas subclasses).

   a) Descomente as duas linhas de console.log abaixo e execute a aplicação.
      Copie a mensagem de erro apresentada no console e explique o motivo do erro.
      Resposta: Uncaught ReferenceError: Conta is not defined. O erro ocorre porque a classe Conta não havia sido importada no topo do arquivo indexPolimorfismo.js (faltava a instrução import {Conta} from "./Conta.js";).

   b) Corrija o erro (sem apagar as duas linhas) e execute novamente.
      Explique por que o resultado é true para os dois objetos, sendo que um deles
      é uma ContaCorrente e o outro é uma Poupanca.
      Resposta: O resultado é true para ambos porque tanto ContaCorrente quanto Poupanca são subclasses que herdam diretamente de Conta (usando extends Conta). Na programação orientada a objetos, isso estabelece uma relação "É-UM", logo toda instância de ContaCorrente ou de Poupanca também é considerada uma instância da superclasse Conta.

   ATENÇÃO: enquanto o erro não for corrigido, nenhuma instrução abaixo destas linhas será executada.
*/
console.log("vetContas[0] é uma Conta? " + (vetContas[0] instanceof Conta));
console.log("vetContas[1] é uma Conta? " + (vetContas[1] instanceof Conta));


/*-------------------------------------------------------------------------------------
  PARTE 2 - POLIMORFISMO COM O MÉTODO toString()

  O laço abaixo (for tradicional) chama vetContas[i].toString() para todas as contas do vetor.
  A instrução é sempre a mesma, mas o método executado depende da classe do objeto armazenado
  em cada posição do vetor. Isso é POLIMORFISMO: a mesma chamada de método produz comportamentos
  diferentes, conforme a classe do objeto.

  ANTES de fazer o DESAFIO 1, execute a aplicação e observe a listagem.

  QUESTÃO 2
  a) As Contas Correntes aparecem sem saldo, tarifa, limite e juros. Coloque um breakpoint na
     linha do console.log do laço abaixo e, no debug, use "Step Into" (F11) para entrar no
     toString() da 1ª conta (i = 0). Em qual classe está o método toString() executado?
     Por que ele foi executado, se o objeto é uma ContaCorrente?
     Resposta: O método executado está na superclasse Conta. Como a classe ContaCorrente ainda não havia sobrescrito o método toString(), o JavaScript percorreu a cadeia de protótipos/herança e executou a versão herdada diretamente da classe pai (Conta).

  DESAFIO 1: implemente o método toString() na classe ContaCorrente
             (veja as orientações no arquivo ContaCorrente_Incompleto.js).

  b) Depois do DESAFIO 1, repita o debug para i = 0 e para i = 1. Liste, na ordem em que são
     executados, os métodos toString() chamados para cada uma dessas contas, indicando a classe
     de cada um.
     Dica: observe o painel "Call Stack" (Pilha de Chamadas) da ferramenta de debug.
     Resposta: Para i = 0 (ContaCorrente): 1º ContaCorrente.toString(), 2º Conta.toString() (via super.toString()), 3º Cliente.toString() (via this.#titular.toString()). Para i = 1 (Poupanca): 1º Poupanca.toString(), 2º Conta.toString() (via super.toString()), 3º Cliente.toString() (via this.#titular.toString()).
-------------------------------------------------------------------------------------*/
console.log("Lista de Contas:\n");
for (let i = 0; i < vetContas.length; i++){
    console.log(vetContas[i].toString() + "\n\n");
}


/*-------------------------------------------------------------------------------------
  PARTE 3 - POLIMORFISMO COM sacar(), depositar() E get saldo

  O laço abaixo tenta sacar R$700,00 e depois depositar R$100,00 em todas as contas.
   - ContaCorrente sobrescreve sacar(), depositar() e get saldo, pois permite usar um limite
     de crédito (o valor usado do limite fica registrado como saldo devedor).
   - Poupanca não sobrescreve esses métodos: usa os métodos herdados de Conta.

  QUESTÃO 3
  A 1ª conta (ContaCorrente) e a 4ª conta (Poupanca) começaram com o mesmo saldo (R$500,00) e
  receberam as mesmas operações, mas terminaram com saldos diferentes (R$-100.00 e R$600.00).
  Explique cada um dos resultados, indicando qual método sacar() foi executado em cada caso.
  Resposta: Na 1ª conta (ContaCorrente), foi executado o método ContaCorrente.sacar(), que considera o limite de crédito de R$200,00 além dos R$500,00 de saldo; assim, o saque de R$700,00 foi aprovado, zerando o saldo base e gerando R$200,00 de saldo devedor. Ao depositar R$100,00 (via ContaCorrente.depositar()), abateu-se metade da dívida, restando R$100,00 de saldo devedor (get saldo() retorna -100.00). Já na 4ª conta (Poupanca), foi executado o método herdado Conta.sacar(), que não permite sacar mais do que o saldo disponível (500 < 700), recusando o saque e mantendo os R$500,00; em seguida, o depósito de R$100,00 somou-se ao saldo, totalizando R$600,00.
-------------------------------------------------------------------------------------*/
console.log("\n\nTentando Sacar R$700,00 e Depositar R$100,00 nas Contas:\n");
for (let i = 0; i < vetContas.length; i++){
    vetContas[i].sacar(700.00);
    vetContas[i].depositar(100.00);
    console.log("Conta " + vetContas[i].id + " - Saldo = R$" + vetContas[i].saldo.toFixed(2) + "\n");
}


/*-------------------------------------------------------------------------------------
  PARTE 4 - POLIMORFISMO COM O MÉTODO viraMes()

  A classe Conta possui o método viraMes(), que não altera o saldo. As subclasses o sobrescrevem:
   - Poupanca: aplica o rendimento (percentual) sobre o saldo;
   - ContaCorrente: cobra a tarifa mensal e os juros sobre o saldo devedor (DESAFIO 2).

  OBS: na instrução console.log(vetContas[i] + "\n\n"), o objeto é concatenado com uma string.
       Nesse caso, o JavaScript chama o método toString() do objeto automaticamente.

  QUESTÃO 4 (responda ANTES de fazer o DESAFIO 2)
  Execute a aplicação: as Poupanças rendem, mas as Contas Correntes não pagam tarifa.
  Coloque um breakpoint na linha vetContas[i].viraMes() e entre (F11) no método para i = 0.
  a) Em qual classe está o método viraMes() executado? Por que a aplicação não apresentou erro,
     se a classe ContaCorrente ainda não possui o método viraMes()?
     Resposta: O método executado está na superclasse Conta (Conta.viraMes()). A aplicação não apresentou erro porque ContaCorrente herda todos os métodos públicos de Conta; na ausência de uma sobrescrita na subclasse, a versão da superclasse é executada normalmente.
  b) Dentro desse viraMes(), entre (F11) na instrução return this.saldo. Qual get saldo() foi
     executado: o de Conta ou o de ContaCorrente? Por quê?
     Resposta: Foi executado o get saldo() da classe ContaCorrente. Mesmo a chamada ocorrendo dentro de um método que esta na superclasse Conta, o ponteiro "this" refere-se ao objeto real em execução (uma instância de ContaCorrente), fazendo com que o polimorfismo resolva o getter sobrescrito na subclasse.

  DESAFIO 2: implemente o método viraMes() na classe ContaCorrente
             (veja as orientações no arquivo ContaCorrente.js).
  Depois do DESAFIO 2, confira os saldos mostrados após a virada do mês:
     1ª conta (Corrente) = R$-125.00      2ª conta (Poupança) = R$404.00
     3ª conta (Corrente) = R$1390.00      4ª conta (Poupança) = R$606.00
-------------------------------------------------------------------------------------*/
console.log("\n\nVirando o Mês das Contas:\n");
for (let i = 0; i < vetContas.length; i++){
    vetContas[i].viraMes();
    console.log(vetContas[i] + "\n\n");
}


/*-------------------------------------------------------------------------------------
  PARTE 5 - POLIMORFISMO "DENTRO" DA SUPERCLASSE

  QUESTÃO 5
  A instrução abaixo transfere R$1.500,00 da 3ª conta (ContaCorrente) para a 4ª conta (Poupanca).
  O método transferir() existe apenas na classe Conta, e o método sacar() de Conta recusaria esse
  saque, pois o saldo da 3ª conta (R$1390.00) é menor que R$1.500,00. Mesmo assim, a transferência
  é realizada. Use o debug para descobrir por quê e explique.
  Dica: dentro de transferir(), entre (F11) nas instruções this.sacar(valor) e contaDestino.depositar(valor).
Resposta: Embora transferir() esteja na classe Conta, o this aponta para a ContaCorrente (vetContas[2]). Por polimorfismo, a chamada this.sacar(valor) executa ContaCorrente.sacar(), que usa o 
limite de crédito para aprovar o saque de R$ 1.500,00. Em seguida, contaDestino.depositar(valor) credita o valor na poupança.
-------------------------------------------------------------------------------------*/
console.log("\n\nTransferindo R$1.500,00 da 3ª conta para a 4ª conta:\n");
const transferiu = vetContas[2].transferir(1500.00, vetContas[3]);
console.log("Transferência realizada? " + transferiu +
            "\nConta " + vetContas[2].id + " - Saldo = R$" + vetContas[2].saldo.toFixed(2) +
            "\nConta " + vetContas[3].id + " - Saldo = R$" + vetContas[3].saldo.toFixed(2));


/*-------------------------------------------------------------------------------------
  PARTE 6 - A ESTRUTURA forEach

  forEach é um método dos Arrays que percorre o vetor do primeiro ao último elemento e, para cada
  elemento, executa a função passada como parâmetro (chamada de função de callback).

  Sintaxe:   vetor.forEach((elemento, indice) => {
                 instruções que usam o elemento...
             });
   - elemento: o valor armazenado na posição atual do vetor (no código abaixo, chamado de conta);
   - indice: a posição atual no vetor (parâmetro opcional; pode ser omitido, como abaixo).

  Diferenças em relação ao for tradicional:
   - não é preciso declarar nem controlar um índice (let i = 0; i < vetor.length; i++);
   - o forEach sempre percorre o vetor inteiro: não é possível interromper o laço com break.

  No laço abaixo, o rendimento é mostrado apenas para as Poupanças. Repare no teste com instanceof.
-------------------------------------------------------------------------------------*/
console.log("\n\nMostrando o Rendimento apenas das Contas Poupança:\n");
vetContas.forEach((conta) => {
    if (conta instanceof Poupanca) {
        console.log("Conta " + conta.id + " - Rendimento = " + conta.rendimento.toFixed(1) + "%\n");
    }
});

/* QUESTÃO 6
   a) Descomente o trecho abaixo (igual ao anterior, mas sem o if) e execute a aplicação.
      Copie a mensagem de erro apresentada no console e explique o motivo do erro.
      Resposta: Uncaught TypeError: Cannot read properties of undefined (reading 'toFixed'). O erro acontece pois o elemento é uma ContaCorrente e não possui o getter rendimento; ao tentar acessar conta.rendimento, o arquivo retorna undefined e falha ao tentar chamar o método .toFixed(1) sobre undefined.
   b) Por que os métodos toString(), sacar() e viraMes() puderam ser chamados para todas as contas
      do vetor sem nenhum teste, mas, para acessar o rendimento, é necessário testar se a conta
      é uma instância de Poupanca?
      Resposta: Porque toString(), sacar() e viraMes() fazem parte da interface comum definida na superclasse Conta, garantindo que toda e qualquer subclasse de Conta os possua. Já a propriedade/getter rendimento é uma característica específica adicionada apenas na subclasse Poupanca, não existindo na superclasse Conta nem em ContaCorrente.
   Depois de responder, comente novamente o trecho abaixo.
*/
//vetContas.forEach((conta) => {
//    console.log("Conta " + conta.id + " - Rendimento = " + conta.rendimento.toFixed(1) + "%\n");
//});


/*-------------------------------------------------------------------------------------
  PARTE 7 - A ESTRUTURA for...of

  O for...of percorre diretamente os VALORES de um vetor: a cada repetição, a variável declarada
  no laço recebe o próximo elemento do vetor.

  Sintaxe:   for (let elemento of vetor) {
                 instruções que usam o elemento...
             }
   - não há índice: se você precisar da posição do elemento, use o for tradicional
     ou o 2º parâmetro do forEach;

  No laço abaixo, o limite disponível é mostrado apenas para as Contas Correntes.
-------------------------------------------------------------------------------------*/
console.log("\n\nMostrando o Limite Disponível apenas das Contas Corrente:\n");
for (let conta of vetContas) {
    if (conta instanceof ContaCorrente) {
        console.log("Conta " + conta.id + " - Limite Disponível = R$" + conta.limiteDisponivel.toFixed(2) + "\n");
    }
}