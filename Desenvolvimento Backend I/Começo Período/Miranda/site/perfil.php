<?php
session_start();
include 'config.php';

$logado = $_SESSION['logado'];

if($logado == 1){
echo criarTopo($logado);
print_r($_SESSION);
echo criarRodape();
} else {
    header("Location: login.php");
    exit;
}

paginaRestrita($logado, "index.php", "Você vai pro index");
?>