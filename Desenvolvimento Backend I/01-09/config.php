<?php

function criarTopo() {
    return '<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site de Postagens - Cadastrar Postagens</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="dflex-center">
            <img src="img/logo.png">
            <h1>Posts-IFES</h1>
        </div>
       '.criaMenu().'
    </header>';
}
function criaMenu($logado = 0) {
$html ='';
if ($logado == 1)
{
    $html = '<nav>
         '.criarLinkMenu("perfil.php", '<ion-icon name="person-outline"></ion-icon>', "Perfil").
         '            
        '.criarLinkMenu("posts.php", '<ion-icon name="add-outline"></ion-icon>', "Cadastrar Postagem").
         '    
         '.criarLinkMenu("sair.php", '<ion-icon name="exit-outline"></ion-icon>', "Sair").
         '        
        </nav>';
} else {
    
    $html = '<nav>
 '.criarLinkMenu("index.php", "<ion-icon name='home-outline'></ion-icon>", "Início").'   
        '.criarLinkMenu("posts.php", "<ion-icon name='paper-plane-outline'></ion-icon>", "Postagens").'     
        '.criarLinkMenu("#", '<ion-icon name="lock-closed-outline"></ion-icon>', "Acessar").'                        
        '.criarLinkMenu("desenvolvedores.php", '<ion-icon name="bug-outline"></ion-icon>', "Desenvolvedores").'                         
        '.criarLinkMenu("contato.php", '<ion-icon name="paper-plane-outline"></ion-icon>', "Contato").'                      
        '.criarLinkMenu("login.php", '<ion-icon name="paper-plane-outline"></ion-icon>', "Login").'  
 </nav>';
}
return $html;
}
/* MENU SEM LOGAR
<nav>
 '.criarLinkMenu("index.php", "<ion-icon name='home-outline'></ion-icon>", "Início").'   
        '.criarLinkMenu("posts.php", "<ion-icon name='paper-plane-outline'></ion-icon>", "Postagens").'     
        '.criarLinkMenu("#", '<ion-icon name="lock-closed-outline"></ion-icon>', "Acessar").'                        
        '.criarLinkMenu("desenvolvedores.php", '<ion-icon name="bug-outline"></ion-icon>', "Desenvolvedores").'                         
        '.criarLinkMenu("contato.php", '<ion-icon name="paper-plane-outline"></ion-icon>', "Contato").'  
 </nav>

 MENU LOGADO
<nav>
         '.criarLinkMenu("perfil.php", '<ion-icon name="person-outline"></ion-icon>', "Perfil").
         '            
        '.criarLinkMenu("posts.php", '<ion-icon name="add-outline"></ion-icon>', "Cadastrar Postagem").
         '    
         '.criarLinkMenu("sair.php", '<ion-icon name="exit-outline"></ion-icon>', "Sair").
         '        
        </nav>
*/

function criarRodape() {
    $rodape = ' <footer class="dflex-center">
        <p>&copy; 2024 Postagens. Todos os direitos reservados.</p>
    </footer>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>    
    </body>
    </html>';
    return $rodape;
}

function linkAtivo($link) {
    $resposta = "";
    $paginaAtual = basename($_SERVER['PHP_SELF']);
    if($link == $paginaAtual) 
        $resposta = "ativo";
    else 
        $resposta = "";


    return $resposta;
}

function criarLinkMenu($link, $icone, $nome) {
    $html = ' <a class="btn '.linkAtivo($link).'" href="'.$link.'">
                '.$icone.' '.$nome.'
            </a>';
    return $html;
}

function pesquisaDinamica($action, $nome, $inputname) {
    return '<main>
    <h1>Pesquisa</h1>     
<form class="form-login" action="'.$action.'" method="GET">
<h2>Pesquise no '.$nome.'</h2>
   <div>
       <label for="pesquisa">Pesquisa:</label>
       <input type="text" id="pesquisa" name="'.$inputname.'" placeholder="Digite sua pesquisa" required>
   </div>
   <div>
    <input type="submit" value="Pesquisar">
    <input type="reset" value="Limpar">
</div>
</form>
</main>';
}
?>