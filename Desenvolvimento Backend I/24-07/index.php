<?php
// apenas estou pintando os fundos para identificar as seções, por isso estão em comentários professor
$numero = 12;
$numerofalso = 13;
$aluno = "Gabe Miranda";
$professor = 'Miltin';

$mensagem = "Voltando ao assunto, aqui e o estudante $aluno, aprendendo PhP com o professor $professor.";
$curiosidade = "<p>O número da sorte é: $numero, ele representa sorte, diferente do $numerofalso.</p>";

$titulo = "Usando Apache";
$header = "<!DOCTYPE html>
<html lang=\"pt-br\">
<header>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>$titulo</title>
    <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">
    <p>Este é um exemplo de site simples usando PHP e Apache.</p>
</header>";
$main = "<body>
<style>
    body {
        font-family: Arial, sans-serif;
       /* background-color: #ff6c6cff; */
        color: #333;
        padding: 20px;
    }
        header {
        /* background-color: #7065ffff; */
}
        footer {
        /* background-color: #65ff7fff; */

    h1 {
        color: #007BFF;
    }

</style>
    <h1>dia 11 yay!</h1>$curiosidade<p>$mensagem</p>";
$footer = "<footer><div>Rodapé do site</div></footer> </body></html>";

echo " $header $main $footer ";