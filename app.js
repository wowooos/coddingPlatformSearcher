/* index.html */
function enviarNome(){
    let nome = document.getElementById("nome-usuario").value;

    localStorage.setItem("nomeUsuario", nome);
    window.location.href = "search-page.html";
}

//---------------------------------------------------------
/* searchPlatforms.html */

/* função para criar o título da segunda página personalizado com o nome do usuário */
function exibeTitulo(){
    let nome = localStorage.getItem("nomeUsuario");
    let header = document.getElementById("cabecalho");

    let exibeTitulo = "";

    if(nome){
        exibeTitulo = `
                <h1> > ${nome.toLocaleUpperCase()}, LET'S DISCOVER SOME CODDING PRACTICE PLATFORMS &lt;/&gt;</h1>
        `;
    
    }else{
        exibeTitulo = `<h1> > WELCOME! LET'S DISCOVER SOME CODDING PRACTICE PLATFORMS &lt;/&gt;</h1>`
    }

    header.innerHTML = exibeTitulo;
}

// Executa a função exibeTitulo() quando a página carregar
window.onload = function() {
    if (document.getElementById("cabecalho")) { // Verifica se está na página correta
        exibeTitulo();
    }

    // Aguarda um pequeno atraso para aplicar a classe
    setTimeout(function() {
        let h1 = document.querySelector("h1");
        if (h1) {
            h1.classList.add("loaded"); // Adiciona a classe após o carregamento
        }
    }, 100); // Delay de 100ms para garantir a transição
};

/* função que gera as informações sobre a plataforma */
function gerainfosPlataformaPesquisa(item, infosPlataforma){
    infosPlataforma += `
    <div>
        <h2 class="titulo-resultado">${item.titulo}</h2>
        <a href="${item.link}" target="_blank" class="link-resultado"> < ACESSE A PLATAFORMA > </a>
        <h3 class="subtitulo-resultado">${item.subtitulo}</h3>
        <p class="paragrafo-resultado">${item.introducao}</p>
    
        <h3 class="subtitulo-resultado">${item.topicoUm}</h3>
        <p class="paragrafo-resultado">${item.conteudoTopicoUm}</p>
    
        <h3 class="subtitulo-resultado">${item.topicoDois}</h3>
        <p>
            <ul>
    
    `
    
    for(let caracteristica of item.conteudoTopicoDois){
    infosPlataforma += `
        <li class="paragrafo-resultado">${caracteristica}</li>
    `
    }
    
    infosPlataforma += `
            </ul>
        </p>
    
        <h3 class="subtitulo-resultado">Conclusão</h3>
        <p class="paragrafo-resultado">${item.conclusao}</p>
    </div>
    `

    return infosPlataforma;
}

/* função que gera o exercício de exemplo da plataforma */
function geraExercicioExemplo(item, exercicioExemplo){

    exercicioExemplo += `
        <h2 class="titulo-resultado">Exemplo de exercício buscado pelo Gemini AI</h2>
        <h3 class="subtitulo-resultado">Vamos resolver um exercício no ${item.exercicio.nome}!</h3>
        <h4 class="subtitulo-resultado">Escolhendo um Exercício: </h4>
        <p class="paragrafo-resultado">${item.exercicio.paragrafoUm}</p>

            <ul>
                <li class="paragrafo-resultado"><strong>Problema: </strong> ${item.exercicio.idExercicio}</li>
            </ul>
        
        <h4 class="subtitulo-resultado">Entendendo o Problema: </h4>
        <p class="paragrafo-resultado">${item.exercicio.paragrafoDois}</p>

            <ul>
                <li class="paragrafo-resultado"><strong>Entrada: </strong>${item.exercicio.entradaExercicio}</li>
                <li class="paragrafo-resultado"><strong>Saída: </strong> ${item.exercicio.saidaExercicio} </li>
            </ul>

        <h4 class="subtitulo-resultado">Resolução em ${item.exercicio.linguagem}:</h4>


        <pre>
        <code>
        ${item.exercicio.codigo}</code>
        </pre>

        <p class="mensagem-alerta-codigo">O código foi gerado por uma IA. Utilize-o com cautela e sempre verifique a precisão das informações.</p>
    `

    return exercicioExemplo;
}

/* função responsável pela lógica de busca e exibição das informações pesquisadas pelo usuário */
function pesquisar(){
    let verificaPesquisa = 0, indiceItemEncontrado;
    let infosPlataforma = "";
    let exercicioExemplo = "";
    let exibeAlerta = "";
    let itemCorrespondenteEncontrado = "";
    
    let divItemEncontrado = document.getElementById("resultado-busca");
    let divAlerta = document.getElementById("resultado-busca");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    let exibeExercicio = document.getElementById("code-example");
    let exibePesquisa = document.getElementById("description-result");

    // limpa o alerta da pesquisa anterior:
    divAlerta.innerHTML = exibeAlerta;
    divItemEncontrado.innerHTML = exibeAlerta;

    /* verifica se a pesquisa é válida (se existe algum valor no campo do input) e se o item existe no banco de dados do sistema */
    for(let item of dados){ //percorre por cada item dos dados
        /* transforma a pesquisa em string minúscula para fazer a comparação - não altera o valor original: */
        for(let tag of item.tags){  // percorre pela lista de tags do item atual 
            if(tag.toLowerCase().includes(campoPesquisa.toLowerCase()) == true && campoPesquisa != ""){   // se a pesquisa corresponder a um item do banco de dados:
                /* valida a comparação com a primeira tag correspondente a pesquisa do usuário */
                indiceItemEncontrado = dados.indexOf(item);
                itemCorrespondenteEncontrado = tag;

                exibeAlerta += `
                <p class="item-correspondente-encontrado"> ITEM CORRESPONDENTE: ${itemCorrespondenteEncontrado} </p>
                `

                divItemEncontrado.innerHTML = exibeAlerta;

                verificaPesquisa = 1;
                break;
            }else verificaPesquisa = 0;
        }
        if(verificaPesquisa == 1) break; 
    }

    /* se a pesquisa for válida, gera os resultados (informações sobre a plataforma e o exercício de exemplo) */
    if(verificaPesquisa == 1){
        infosPlataforma = gerainfosPlataformaPesquisa(dados[indiceItemEncontrado], infosPlataforma);
        exercicioExemplo = geraExercicioExemplo(dados[indiceItemEncontrado], exercicioExemplo);
        
        exibeExercicio.innerHTML = exercicioExemplo;
        exibePesquisa.innerHTML = infosPlataforma;

    }else{  
        /* se a pesquisa for inválida, exibe um alerta, uma plataforma aleatória, e as plataformas que podem ser pesquisadas no site */

        exibeAlerta += `
        <div class="alerta-pesquisa">
                <p class="paragrafo-alerta">> console.log ( nenhum item encontrado )</p>
                <p class="paragrafo-lista-plataformas">Plataformas que você pode explorar:</p>
                <ul>
        `

        for(let plataforma of listaPlataformas){
            exibeAlerta += `
                <li> . / ${plataforma} </li>
            `
        }

        exibeAlerta += `
            </ul>
            <p class="paragrafo-plataforma-aleatoria">Selecionamos uma plataforma aleatória para você começar sua descoberta!</p>
            </div>
        `
        
        /*  explicação Gemini:
        Math.random() gera um número pseudo-aleatório entre 0 e 1 (exclusivo de 1).
        Math.random() * lista.length gera um número aleatório no intervalo de 0 a lista.length (não inclusivo de lista.length).
        Math.floor() arredonda esse número para baixo, resultando em um índice inteiro válido para o array.
        */
        const plataformaAleatoria = Math.floor(Math.random() * dados.length);
        infosPlataforma = gerainfosPlataformaPesquisa(dados[plataformaAleatoria], infosPlataforma);
        exercicioExemplo = geraExercicioExemplo(dados[plataformaAleatoria], exercicioExemplo);
       
        divAlerta.innerHTML += exibeAlerta;
        exibePesquisa.innerHTML = infosPlataforma;
        exibeExercicio.innerHTML = exercicioExemplo;
    }

    // exibePesquisa.offsetHeight;

    exibePesquisa.classList.add('visible');
    exibeExercicio.classList.add('visible');
}    
