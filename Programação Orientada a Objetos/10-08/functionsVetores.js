const sltOpcoes = document.getElementById("sltOpcoes");
const inValor = document.getElementById("inValor");
const inPosicao = document.getElementById("inPosicao");
const btExecutar = document.getElementById("btExecutar");
const outSaida = document.getElementById("outSaida");

btExecutar.addEventListener("click", executarFunc);

const vetNumeros = [31, 7, 53, 18, 24, 9];

function executarFunc() {
    let opcao = sltOpcoes.value;
    let valor = Number(inValor.value);
    let posicao = Number(inPosicao.value);

    switch (opcao) {
        case "MOSTRAR":
            outSaida.innerHTML = "Elementos do Vetor:<br>" + toString(vetNumeros);
            break;

        case "INCLUIR":
            if (inValor.value != "") {
                let inseriu = inserirElemento(vetNumeros, valor);
                if (inseriu == true) {
                    outSaida.innerHTML = "Sucesso! Elemento inserido!";
                } else {
                    outSaida.innerHTML = "Não Inserido! Elemento já existe no vetor!";
                }
            } else {
                outSaida.innerHTML = "Informe um valor para incluir!";
            }
            break;

        case "EXCLUIR":
            if (inValor.value != "") {
                let excluiu = excluirElemento(vetNumeros, valor);
                if (excluiu == true) {
                    outSaida.innerHTML = "Sucesso! Elemento excluído!";
                } else {
                    outSaida.innerHTML = "Elemento não encontrado no vetor!";
                }
            } else {
                outSaida.innerHTML = "Informe o valor a ser excluído!";
            }
            break;

        case "ALTERAR":
            if (inValor.value != "" && inPosicao.value != "") {
                let alterou = alterarElemento(vetNumeros, posicao, valor);
                if (alterou == true) {
                    outSaida.innerHTML = "Sucesso! Elemento alterado!";
                } else {
                    outSaida.innerHTML = "Não alterado! Posição inválida ou o elemento já existe no vetor.";
                }
            } else {
                outSaida.innerHTML = "Informe o valor e a posição para alterar!";
            }
            break;

        case "PROCURAR":
            if (inValor.value != "") {
                let pos = procurarElemento(vetNumeros, valor);
                if (pos !== -1) {
                    outSaida.innerHTML = `Elemento ${valor} encontrado na posição [${pos}]!`;
                } else {
                    outSaida.innerHTML = `O valor ${valor} não existe no vetor.`;
                }
            } else {
                outSaida.innerHTML = "Informe o valor a ser procurado!";
            }
            break;

        case "SOMAR":
            let soma = somarElementos(vetNumeros);
            outSaida.innerHTML = `A soma de todos os elementos é: ${soma}`;
            break;

        case "MENOR":
            if (vetNumeros.length > 0) {
                let idxMenor = indexMenorElemento(vetNumeros);
                outSaida.innerHTML = `Menor elemento: ${vetNumeros[idxMenor]} na posição [${idxMenor}].`;
            } else {
                outSaida.innerHTML = "O vetor está vazio!";
            }
            break;

        case "ORDENAR":
            let vetorOrdenado = ordenarVetor(vetNumeros);
            outSaida.innerHTML = "Vetor Ordenado (Crescente):<br>" + toString(vetorOrdenado);
            break;

        case "MEDIA":
            if (vetNumeros.length > 0) {
                let media = calcularMedia(vetNumeros);
                outSaida.innerHTML = `A média dos elementos é: ${media.toFixed(2)}`;
            } else {
                outSaida.innerHTML = "O vetor está vazio!";
            }
            break;

        case "MAIOR":
            if (vetNumeros.length > 0) {
                let idxMaior = indexMaiorElemento(vetNumeros);
                outSaida.innerHTML = `Maior elemento: ${vetNumeros[idxMaior]} na posição [${idxMaior}].`;
            } else {
                outSaida.innerHTML = "O vetor está vazio!";
            }
            break;

        case "LIMPAR":
            if (vetNumeros.length > 0) {
                limparVetor(vetNumeros);
                outSaida.innerHTML = "Sucesso! O vetor foi esvaziado.";
            } else {
                outSaida.innerHTML = "O vetor já está vazio!";
            }
            break;
    }
}

function toString(vetor) {
    let strVetor = "";
    vetor.forEach(
        (numero, ind) => {
            strVetor += `[${ind}]: ${numero}<br>`;
        }
    );
    return strVetor;
}

function inserirElemento(vetor, elemento) {
    if (vetor.includes(elemento) == false) {
        vetor.push(elemento);
        return true;
    }
    return false;
}

function excluirElemento(vetor, elemento) {
    let posicao = vetor.indexOf(elemento);
    if (posicao >= 0) {
        vetor.splice(posicao, 1);
        return true;
    }
    return false;
}

function alterarElemento(vetor, posicao, novoValor) {
    if (posicao < 0 || posicao >= vetor.length) {
        return false;
    }
    if (vetor.includes(novoValor)) {
        return false;
    }
    vetor[posicao] = novoValor;
    return true;
}

function procurarElemento(vetor, elemento) {
    return vetor.indexOf(elemento);
}

function somarElementos(vetor) {
    var acumuladora = 0;
    vetor.forEach(
        (numero) => {
            acumuladora += numero;
        }
    );
    return acumuladora;
}

function indexMenorElemento(vetor) {
    var indexMenor = 0;
    for (let ind = 1; ind < vetor.length; ind++) {
        if (vetor[ind] < vetor[indexMenor]) {
            indexMenor = ind;
        }
    }
    return indexMenor;
}

function ordenarVetor(vetor) {
    let copiaVetor = [...vetor];
    copiaVetor.sort((a, b) => a - b);
    return copiaVetor;
}

function calcularMedia(vetor) {
    let soma = somarElementos(vetor);
    return soma / vetor.length;
}

function indexMaiorElemento(vetor) {
    let indexMaior = 0;
    for (let ind = 1; ind < vetor.length; ind++) {
        if (vetor[ind] > vetor[indexMaior]) {
            indexMaior = ind;
        }
    }
    return indexMaior;
}

function limparVetor(vetor) {
    vetor.length = 0;
}