<?php
include 'config.php';
?>

<!doctype html>
<html lang="pt-BR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Google — Doodle</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <?php

    echo basename($_SERVER['PHP_SELF']);
    echo criarTopo();
    echo $main;
    echo criarRodape();
    ?>
</body>

</html>