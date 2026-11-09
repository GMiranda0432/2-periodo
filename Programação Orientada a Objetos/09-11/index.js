/*
O JavaScript pode ser utilizado como script padrão, sendo somente executado, ou compartimentalizado usando os módulos.
Por padrão, quando pedimos a execução de um arquivo JavaScript com o Node, isso é feito como um script,
 sem identificar que estamos trabalhando com módulos. Portanto, teremos que passar essa informação ao interpretador do JavaScript.

Todo projeto Node possui um arquivo de configuração contendo uma série de informações sobre o pacote com que estamos trabalhando,
 e ele é chamado de package.json. Diversos frameworks, como o React, possuem esse arquivo nativamente.
É possível criarmos o arquivo package.json por meio de um comando, que pode ser executado no Prompt de Comando, no Powershell ou
 no próprio terminal do VSCode (que é aberto com "ctrl + J").
Após abrirmos o terminal, executaremos o comando npm init, que inicializará um gerenciador de pacotes que nos auxiliará na criação do pacote.

Esse gerenciador nos fará uma série de perguntas, começando pelo nome do pacote, que será "bytebank".
Pressionando "Enter" conseguimos avançar para as próximas definições, como version, que manteremos a sugestão 1.0.0;
 description, que definiremos como "Projeto do bytebank para seus clientes"; entry point, que define o arquivo inicial de execução do programa, no nosso caso index.js (o padrão do JavaScript);
  test command, um comando para testes que manteremos vazio; git repository, que permite adicionar um repositório do GitHub, etapa que pularemos;
  keywords, para definir palavras-chave para o projeto, e que também pulares;
  author, que mantivemos vazio na gravação do treinamento, mas que você pode preencher com seu nome se preferir (ou alterar futuramente);
   e license, que manteremos a sugestão padrão.
Para que o Node deixe de exibir o erro que tínhamos anteriormente, bastará adicionarmos uma nova marcação, "type", recebendo o valor "module"

Como normalmente estamos trabalhando em equipe, não queremos que alguém na nossa equipe precise ficar perguntando o tempo todo qual o comando precisa escrever para o programa rodar. É nesse momento que usamos os scripts do package.json.
Podemos escrever um script com o comando que colocaríamos no terminal, por exemplo:
    "scripts": {
        "start": "node index.js"
    }

E ao invés de escrever esse comando podemos chamar o script com o comando npm start. 
Dessa forma não precisamos lembrar de todo o comando sempre que vamos executar o programa.
Se você quiser saber mais, veja na documentação do NPM (https://docs.npmjs.com/misc/scripts) os tipos de scripts e os casos de uso.
*/

import {Conta} from "./Conta.js";
import {Cliente} from "./Cliente.js";

const cliente1 = new Cliente("Bruno", "11122233344", "1997/09/03");
const cliente2 = new Cliente("Milton", "99988877766", "1990/05/20");

console.log ("Quantidade Contas do Banco = " + Conta.qtContas);

const conta1 = new Conta(cliente1, 1000.00, 200.00);
const conta2 = new Conta(cliente2, 2000.00);

console.log ("\nQuantidade Contas do Banco = " + Conta.qtContas);

console.log ("\n\n" + conta1);
console.log ("\n" + conta2);

conta1.depositar(500.00);

let valorTransf = 7500.00;
conta1.transferir(valorTransf, conta2);

console.log ("\n\n" + conta1.toString());
console.log ("\n" + conta2.toString());