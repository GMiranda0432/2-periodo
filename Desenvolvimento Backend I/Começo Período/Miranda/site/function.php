<?php
function criaMensagem($tipo, $mensagem) {
    return "<div class='mensagem {$tipo}'><strong>[" . strtoupper($tipo) . "]</strong> {$mensagem}</div>";
}

function paginaRestrita($logado) {
    if ($logado) {
        return criaMensagem("sucesso", "Acesso permitido! Bem-vindo à área restrita.");
    } else {
        return criaMensagem("erro", "Acesso negado! Você precisa estar logado para ver esta página.");
    }
}

$usuarioLogado = true;

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Página Restrita</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .mensagem { padding: 15px; border-radius: 5px; margin-top: 10px; }
        .sucesso { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .erro { background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
    </style>
</head>
<body>

    <h1>Painel do Sistema</h1>

    <?php echo paginaRestrita($usuarioLogado); ?>

</body>
</html>