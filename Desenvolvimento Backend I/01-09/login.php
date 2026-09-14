<?php
include 'config.php';
echo criarTopo();
echo pesquisaDinamica('https://www.youtube.com/results', 'Youtube', 'search_query');
echo criarRodape();
?>