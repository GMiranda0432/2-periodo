<?php
include ('conexao.php');

$sql = "SELECT * FROM personagens";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["id"]. " - nome: " . $row["nome"].  " - hp: " . $row["hp"].  " - custo: " . $row["custo"].  " - descricao: " . $row["descricao"]. " - imagem: " . $row["imagem"]. "<br>";
    }
} else {
    echo "Nenhum resultado encontrado";
}
mysqli_close($conn);
?>