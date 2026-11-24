<?php
include ('conexao.php');

$nome = "Entidade043";
$hp = 100;
$custo = 2010;
$descricao = "Nem importante, nem relevante";
$imagem = "https://falseimage.com/200x200";

$sql = "INSERT INTO personagens (nome, hp, custo, descricao, imagem) VALUES ('$nome', '$hp', '$custo', '$descricao', '$imagem')";

if (mysqli_query($conn, $sql)) {
    echo "Novo registro criado com sucesso";
} else {
    echo "Erro ao registrar personagem: " . mysqli_error($conn);
}

mysqli_close($conn);