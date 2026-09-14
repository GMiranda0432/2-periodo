<?php
include 'config.php';
print_r($_POST);
$nome = $_POST['login'];
$senha = $_POST['senha'];

if ($nome == "admin" && $senha == 1234) {
    echo "Acertou, você está logado";
} else {
    echo "ERROU FEIO, ERROU RUDE";
}
?>