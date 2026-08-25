<?php

$nomeArquivo = $_SERVER['PHP_SELF'];
$nomeAlterado = basename($nomeArquivo);

function criarTopo() {
    return "<header class=\"topbar\">
        <div class=\"topbar-left\">
            <a href=\"#\">Sobre</a>
            <a href=\"#\">Publicidade</a>
            <a href=\"#\">Negócios</a>
        </div>
        <div class=\"topbar-right\">
            <a href=\"#\">Gmail</a>
            <a href=\"#\">Imagens</a>
            <button class=\"icon-grid\" aria-label=\"Apps\"></button>
            <img src=\"conta.png\" class=\"avatar\" alt=\"Conta\">
        </div>
    </header>";
}
$main = "<main class=\"main\">
        <img src=\"nomeGoogle.png\" alt=\"Google\" class=\"logo\">

        <div class=\"search-wrap\">
            <div class=\"search-box\">
                <button class=\"search-left\">+</button>
                <input type=\"search\" placeholder=\"Pesquisar no Google ou digitar URL\" aria-label=\"Pesquisar\">
                <button class=\"mic\" aria-label=\"Pesquisar por voz\">🎤</button>
            </div>

            <div class=\"search-actions\">
                <button>Pesquisa Google</button>
                <button>Estou com sorte</button>
            </div>
        </div>
    </main>";

function criarRodape() {
    return "<footer class=\"page-footer\">
        <div class=\"footer-left\">
            <span>Brasil</span>
            <a href=\"#\">Sobre</a>
            <a href=\"#\">Publicidade</a>
            <a href=\"#\">Negócios</a>
            <a href=\"#\">Como funciona a Pesquisa</a>
        </div>
        <div class=\"footer-right\">
            <a href=\"#\">Privacidade</a>
            <a href=\"#\">Termos</a>
            <a href=\"#\">Configurações</a>
        </div>
    </footer>";
}
?>