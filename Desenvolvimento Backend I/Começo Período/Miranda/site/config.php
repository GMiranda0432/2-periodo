<?php

$SITE = "Site de Postagens";
$SITE_MENU = [
'Principal' => 'index.php',
'Cadastrar Postagem' => 'posts.php',
'Administração' => 'adm.php',
'Acessar' => 'login.php',
'Contato' => 'contato.php'
];

function estaAtivo($pagina) {
    $paginaAtual = basename($_SERVER['PHP_SELF']);
    return $paginaAtual === $pagina ? 'ativo' : '';
}

function criarMenu($items) {
    $menu = "";
    foreach($items as $nome => $link) {
       $menu .= '<a class="btn '.estaAtivo($link) .'" href="'.$link.'"><ion-icon name="paper-plane-outline"></ion-icon> '.$nome.'</a>';
    }
    return $menu;
}

function criarTopo($titulo = "Site de Postagens") {
    global $SITE_MENU;

    $topo = '<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>'.$titulo.'</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header>
            <div class="dflex-center">
                <img src="img/logo.png">
                <h1>Posts-IFES</h1>
            </div>
            <nav>
               '.criarMenu($SITE_MENU).'
            </nav>
        </header>';
 echo $topo;
}

function criarFormularioLogin() {
    $formulario = '<main>
    <form>
        <label for="login">Login:</label>
        <input type="text" id="login" name="login" required><br><br>

        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required><br><br>

        <input type="submit" value="Entrar">
    </form></main>';
    return $formulario;
}

function criarRodape() {
    $rodape = '<footer class="dflex-center">
    <p>&copy; 2024 Postagens. Todos os direitos reservados.</p>
</footer>

<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>    
</body>
</html>';

echo $rodape;
}

function paginaRestrita($logado, $paginaRedirect, $mensagem) {
    if ($logado != 1) {
        $_SESSION["mensagem"] = $mensagem;
        $_SESSION["tipo"] = 0;
        header("Location: $paginaRedirect?mensagem=$mensagem&tipo=0");
        exit;
    }
} 
?>