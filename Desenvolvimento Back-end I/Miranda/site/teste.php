<?php
include 'config.php';
session_start();

$senha_cript = md5("123456");
echo $senha_cript;

print_r($_POST);

$nome = $_POST['login'];
$senha = $_POST['senha'];

if ($nome == "admin" && md5($senha) == "e10adc3949ba59abbe56e057f20f883e") {
    echo "Acertou, você está logado";
    $_SESSION['logado'] = 1;
    $_SESSION['nome'] = $nome;
    header("location: index.php");
} else {
    $_SESSION['logado'] = 0;
    $_SESSION["mensagem"] = "errou a senha ou login";
    $_SESSION["tipo"] = 0;

    header("location: login.php?mensagem=precisa-logar&tipo=0");
}
?>