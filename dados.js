let listaPlataformas = [
    "Beecrowd", 
    "LeetCode", 
    "The Odin Project",
    "HackerRank",
    "CodinGame",
    "JavaScript30",
    "100Days of Code",
    "TopCoder",
    "InterviewBit",
    "FreeCodeCamp"
]

let dados = [
    {
        titulo:"Beecrowd: Sua Jornada para a Maestria em Programação!",
        subtitulo:"Descubra o Mundo da Programação com a Beecrowd",
        introducao:`A Beecrowd é uma plataforma online que se tornou referência para quem deseja aprimorar suas habilidades em programação. Com uma interface intuitiva e uma vasta biblioteca de desafios, a Beecrowd oferece um ambiente completo para você praticar, aprender e crescer como programador.
        `,
        topicoUm: "Por que usar a plataforma?",
        conteudoTopicoUm:`Foco em Algoritmos e Lógica de Programação: A Beecrowd é ideal para quem busca fortalecer sua base em algoritmos e lógica de programação. A plataforma oferece uma grande variedade de problemas que exigem raciocínio lógico e a aplicação de conceitos fundamentais da programação.
        `,
        topicoDois:"Principais Características da Beecrowd:",
        conteudoTopicoDois: [
            `<strong>Biblioteca extensa de problemas:</strong> A Beecrowd possui uma enorme coleção de desafios, desde os mais simples até os mais complexos, cobrindo diversos temas como matemática, geometria, estruturas de dados e algoritmos.`,
            `<strong>Diversidade de linguagens de programação:</strong> Você pode escolher entre diversas linguagens para resolver os problemas, como C, C++, Java, Python, JavaScript e muitas outras.`,
            `<strong>Correção automática:</strong> A plataforma oferece correção automática dos seus códigos, permitindo que você identifique erros e otimize suas soluções de forma rápida e eficiente.`,
            `<strong>Comunidade ativa:</strong> A Beecrowd possui uma comunidade vibrante de programadores, onde você pode tirar dúvidas, compartilhar conhecimentos e participar de discussões.`,
            `<strong>Rankings e competições:</strong> A plataforma oferece rankings e competições, incentivando a prática e o desenvolvimento de habilidades competitivas.`,
            `<strong>Recursos educacionais:</strong> Além dos desafios, a Beecrowd oferece tutoriais, artigos e outros recursos educacionais para auxiliar no aprendizado.`
        ],
        conclusao:`A Beecrowd é mais do que apenas uma plataforma de programação. É um ambiente completo para você aprender, praticar e crescer como programador. Se você busca aprimorar suas habilidades em algoritmos, lógica de programação e se preparar para competições de programação, a Beecrowd é a plataforma ideal para você. Comece agora mesmo sua jornada rumo à maestria em programação!`,
        link:"https://beecrowd.com/pt/",
        tags: [
            "beecrowd", 
            "plataforma", 
            "programação", 
            "programacao", 
            "programaçao", 
            "programar", 
            "lógica", 
            "logica", 
            "raciocínio", 
            "raciocinio", 
            "exercícios",
            "C",
            "C++",
            "Java",
            "Python",
            "C#",
            "JavaScript",
            "Ruby",
            "Swift",
            "Kotlin",
            "PHP",
            "Go",
            "Haskell",
            "R",
            "Perl",
            "Scala",
            "Objective-C",
            "Lua",
            "Scheme",
            "Dart",
            "TypeScript"
        ],
        exercicio: {
            nome: "Beecrowd",
            paragrafoUm: `Para este exemplo, escolhi o exercício "Área do Círculo", que é um problema simples, ideal para praticar a implementação de fórmulas matemáticas básicas. Este exercício é ótimo para revisar conceitos de cálculo e prática de codificação em uma linguagem como Python.`,
            idExercicio: "1002 - Área do Círculo",
            paragrafoDois: `O problema pede para calcular a área de um círculo dado o valor do raio. A fórmula para calcular a área de um círculo é A = π * r^2, onde A é a área e r é o raio do círculo. O valor de π (pi) deve ser considerado como 3.14159.`,
            entradaExercicio: "2.0",
            saidaExercicio: "12.5664",
            linguagem: "Python",
            codigo:`
    import math

    def calcular_area_circulo(raio):
    # Fórmula da área do círculo
    area = math.pi * (raio ** 2)
    return area

    # Exemplo de uso
    raio = float(input())
    print(f"A={calcular_area_circulo(raio):.4f}")
    `
        } 
    },
    {
        titulo:"LeetCode: Afie suas habilidades de programação!",
        subtitulo:"Prepare-se para as entrevistas técnicas com o LeetCode!",
        introducao:`A prática constante é essencial para se tornar um programador habilidoso, e encontrar uma plataforma que ofereça desafios de programação variados e bem estruturados pode fazer toda a diferença. LeetCode é uma dessas plataformas, amplamente reconhecida e utilizada por desenvolvedores em todo o mundo para aprimorar suas habilidades de programação e se preparar para entrevistas técnicas.`,
        topicoUm:"Por que usar a plataforma?",
        conteudoTopicoUm:`LeetCode é uma plataforma dedicada à prática de programação e à preparação para entrevistas técnicas. Seu foco principal é fornecer uma ampla gama de problemas de codificação que cobrem diversas áreas da ciência da computação, desde algoritmos e estruturas de dados até problemas complexos de sistemas. A plataforma é amplamente utilizada por candidatos que estão se preparando para entrevistas em grandes empresas de tecnologia, como Google, Facebook e Amazon. A LeetCode ajuda os usuários a desenvolver uma compreensão mais profunda dos conceitos de programação e a melhorar suas habilidades de resolução de problemas através de desafios que simulam questões reais de entrevistas.`,
        topicoDois:"Principais características:",
        conteudoTopicoDois: [
            `<strong>Variedade de Problemas:</strong> LeetCode oferece uma vasta coleção de problemas de codificação que vão desde níveis iniciante até avançado. Os problemas são organizados em categorias como algoritmos, estruturas de dados e sistemas, permitindo que os usuários se concentrem em áreas específicas de interesse ou necessidade.`,
            `<strong>Ambiente de Codificação Interativo:</strong> A plataforma possui um ambiente de codificação online que suporta múltiplas linguagens de programação. Os usuários podem escrever, testar e depurar seu código diretamente na interface da plataforma.`,
            `<strong>Discussões e soluções:</strong> Cada problema possui uma seção de discussões onde os usuários podem compartilhar dicas, soluções alternativas e estratégias. Isso facilita a aprendizagem colaborativa e a troca de conhecimentos.`,
            `<strong>Competições de Programação:</strong> LeetCode organiza competições regulares que permitem aos usuários testar suas habilidades contra a de outros programadores, promovendo um ambiente competitivo e desafiador.`,
            `<strong>Preparação para Entrevistas:</strong> A plataforma oferece um conjunto de problemas focados em técnicas de entrevista, ajudando os usuários a se prepararem para questões técnicas comuns em processos seletivos.`,
            `<strong>Recursos Educacionais:</strong> Além dos problemas de codificação, LeetCode oferece artigos e tutoriais sobre diversos tópicos técnicos, proporcionando uma base sólida para a aprendizagem.`,
            `<strong>Suporte para Linguagens de Programação:</strong> LeetCode suporta uma ampla gama de linguagens de programação, permitindo que os usuários escolham a que melhor se adapta às suas necessidades ou preferências. As linguagens suportadas incluem: Python, Java, C++, C#, JavaScript, TypeScript, Ruby, Swift, Go, Kotlin, Scala, SQL, R, PHP, Objective-C, Perl, Bash`,
        ],
        conclusao:`LeetCode se destaca como uma plataforma de prática de programação altamente eficaz, oferecendo uma vasta gama de problemas de codificação, um ambiente de codificação interativo e recursos valiosos para a preparação de entrevistas. Com suporte para múltiplas linguagens de programação e uma comunidade ativa de usuários, a LeetCode é uma ferramenta indispensável para desenvolvedores que buscam aprimorar suas habilidades e se preparar para desafios técnicos em suas carreiras. Seja você um iniciante ou um programador experiente, a LeetCode oferece recursos e desafios que podem ajudar a atingir seus objetivos de desenvolvimento profissional.`,
        link:"https://leetcode.com/",
        tags: [
            "plataforma", 
            "programação", 
            "programacao", 
            "programaçao", 
            "programar", 
            "leetcode", 
            "entrevistas", 
            "algoritmos", 
            "estruturas de dados", 
            "desafios", 
            "competição", 
            "competicao", 
            "competição", 
            "algoritmos de ordenação", 
            "ordenacao", 
            "ordenaçao", 
            "Python", 
            "Java", 
            "C++", 
            "C#", 
            "JavaScript", 
            "TypeScript", 
            "Ruby", 
            "Swift", 
            "Go", 
            "Kotlin", 
            "Scala", 
            "SQL", 
            "R", 
            "PHP", 
            "Objective-C", 
            "Perl", 
            "Bash"],
        exercicio: {
            nome: "LeetCode",
            paragrafoUm: `Para este exemplo, vamos resolver um exercício interessante que é ideal para testar nossas habilidades em programação. Escolhi um problema que é frequentemente abordado em entrevistas técnicas e é uma ótima oportunidade para aplicar conceitos de algoritmos e estruturas de dados.`,
            idExercicio: "1 - Two Sum",
            paragrafoDois: `O problema "Two Sum" é um clássico que exige encontrar dois números em uma lista que somam um valor alvo. É um ótimo exemplo para praticar habilidades de busca e manipulação de arrays.`,
            entradaExercicio: "nums = [2, 7, 11, 15], target = 9",
            saidaExercicio: "[0, 1] (porque nums[0] + nums[1] é igual a 9)",
            linguagem: "Python",
            codigo:`
    def two_sum(nums, target):
    # Cria um dicionário para armazenar os índices dos números
    num_to_index = {}

    # Itera sobre a lista de números
    for i, num in enumerate(nums):
    # Calcula o complemento necessário para atingir o alvo
    complement = target - num

    # Verifica se o complemento está no dicionário
    if complement in num_to_index:
    # Retorna os índices dos dois números
    return [num_to_index[complement], i]

    # Armazena o índice do número atual no dicionário
    num_to_index[num] = i

    # Caso não encontre uma solução, retorna uma lista vazia
    return []

    # Exemplo de uso
    nums = [2, 7, 11, 15]
    target = 9
    print(two_sum(nums, target))  # Saída esperada: [0, 1]
        `,
        } 
    },
    {
        titulo:"Explorando a Plataforma The Odin Project",
        subtitulo:"O Que Torna o The Odin Project Especial?",
        introducao:`The Odin Project é uma plataforma de aprendizado de programação que se destaca por oferecer um currículo completo e gratuito para quem deseja se aprofundar no desenvolvimento web. Através de um currículo bem estruturado, a plataforma se compromete a fornecer uma educação prática e acessível para todos.`,
        topicoUm:"Por que usar a plataforma?",
        conteudoTopicoUm:`The Odin Project é especialmente focado em preparar seus usuários para o mercado de trabalho através de um currículo prático e baseado em projetos. Ao invés de se limitar a teoria, o curso incentiva a prática com projetos reais que ajudam a solidificar o conhecimento adquirido. A plataforma se concentra em desenvolvimento web, abrangendo tanto o front-end quanto o back-end, e é ideal para quem busca uma abordagem hands-on no aprendizado.`,
        topicoDois:"Principais características da plataforma",
        conteudoTopicoDois: [
            `<strong>Currículo Abrangente:</strong> Oferece um plano de estudo detalhado que cobre desenvolvimento web completo, desde HTML e CSS até JavaScript e frameworks modernos.`,
            `<strong>Projetos Práticos:</strong> A plataforma incentiva a criação de projetos reais que simulam problemas do mundo real, ajudando a construir um portfólio robusto.`,
            `<strong>Comunidade Ativa:</strong> Conta com uma comunidade de alunos e mentores que ajudam a responder dúvidas e oferecer suporte.`,
            `<strong>Recursos Educacionais:</strong> Inclui tutoriais, artigos e recursos adicionais para complementar o aprendizado.`,
            `<strong>Linguagens Suportadas:</strong> O The Odin Project abrange várias linguagens de programação para a resolução de problemas e desenvolvimento, incluindo HTML, CSS, JavaScript, Ruby, SQL, e Python.`
        ],
        conclusao:`O The Odin Project é uma excelente opção para quem busca aprender programação e desenvolvimento web de maneira prática e gratuita. Com seu foco em projetos reais e uma comunidade ativa, a plataforma oferece uma educação de qualidade que pode ajudar a abrir portas no mercado de trabalho para desenvolvedores em potencial. Se você está começando ou procurando expandir suas habilidades, o The Odin Project pode ser uma ferramenta valiosa para seu aprendizado.`,
        link:"https://www.theodinproject.com/",
        tags: [
            "the odin project",
            "programação",
            "desenvolvimento web",
            "front-end",
            "back-end",
            "HTML",
            "CSS",
            "JavaScript",
            "Ruby",
            "Rails",
            "Git",
            "GitHub",
            "projetos práticos",
            "bootcamp",
            "aprendizado online",
            "desenvolvimento de software",
            "projetos de código",
            "fundamentos de programação",
            "código aberto",
            "prática de programação",
            "currículos de programação",
            "Python",
            "Java",
            "C++",
            "C#",
            "TypeScript",
            "Swift",
            "Go",
            "Kotlin",
            "Scala",
            "SQL",
            "R",
            "PHP",
            "Objective-C",
            "Perl",
            "Bash"
        ],
        exercicio: {
            nome: "The Odin Project",
            paragrafoUm: `Hoje vamos resolver um exercício do The Odin Project que é excelente para praticar habilidades fundamentais de programação em JavaScript. O exercício escolhido é um ótimo exemplo de como aplicar conceitos de manipulação de strings e arrays.`,
            idExercicio: " 1 - Reverse a String",
            paragrafoDois: `O problema "Reverse a String" pede para que você crie uma função que inverta uma string dada. Este é um exercício simples, mas é muito útil para entender operações básicas em strings e para treinar a lógica de programação. o enunciado do exercício descreve: escreva uma função que receba uma string como entrada e retorne a string invertida.`,
            entradaExercicio: "hello",
            saidaExercicio: "olleh",
            linguagem: "JavaScript",
            codigo:`
    function reverseString(str) {
    // Converte a string para um array de caracteres, inverte o array e depois junta os caracteres de volta em uma string
    return str.split('').reverse().join('');
    }

    // Exemplo de uso
    const input = 'hello';
    console.log(reverseString(input));  // Saída esperada: 'olleh'
    `
        } 
    },
    {
        titulo:"Desbravando o Mundo da Programação com HackerRank",
        subtitulo:"Sua Jornada na Programação Começa Aqui",
        introducao:`HackerRank é uma plataforma de prática de programação que oferece um ambiente desafiador e interativo para aprimorar suas habilidades técnicas. Ideal para desenvolvedores de todos os níveis, HackerRank combina desafios de codificação com uma abordagem prática para resolver problemas, preparando você para enfrentar questões reais e entrevistas técnicas com confiança.`,
        topicoUm:"Por que usar a plataforma?",
        conteudoTopicoUm:`HackerRank é voltado para ajudar programadores a melhorar suas habilidades através de desafios de codificação e exercícios em uma ampla gama de tópicos técnicos. A plataforma é especialmente útil para quem deseja se preparar para entrevistas de emprego em grandes empresas de tecnologia, oferecendo uma variedade de problemas que simulam questões reais de entrevistas. Além disso, HackerRank é uma excelente ferramenta para quem busca aprimorar suas habilidades de programação e algoritmos em um ambiente competitivo e recompensador.`,
        topicoDois:"Principais Características da Plataforma",
        conteudoTopicoDois: [
            `<strong>Desafios de Codificação:</strong> HackerRank oferece uma ampla gama de problemas, desde desafios básicos até questões complexas, permitindo que os usuários desenvolvam e testem suas habilidades em diferentes áreas da programação.`,
            `<strong>Preparação para Entrevistas:</strong> A plataforma fornece problemas e simulados específicos para entrevistas técnicas, ajudando os usuários a se prepararem melhor para as exigências do mercado de trabalho.`,
            `<strong>Competências e Certificações:</strong> Os usuários podem obter certificações e demonstrar suas habilidades através de uma série de testes e competições.`,
            `<strong>Comunidade e Competição:</strong> HackerRank possui uma comunidade ativa e a oportunidade de participar de competições de codificação, permitindo que os usuários testem suas habilidades contra outros desenvolvedores ao redor do mundo.`,
            `<strong>Linguagens Suportadas:</strong> HackerRank suporta uma ampla gama de linguagens de programação, incluindo Python, Java, C++, C#, Ruby, JavaScript, SQL, Go, Swift, Kotlin, TypeScript, Scala, PHP, R, Bash, Perl, e Objective-C.`
        ],
        conclusao:`HackerRank é uma plataforma poderosa para quem busca aprimorar suas habilidades de programação e se preparar para entrevistas técnicas. Com uma vasta gama de desafios e problemas práticos, é ideal tanto para iniciantes quanto para desenvolvedores experientes. Através de sua abordagem prática e suporte a diversas linguagens de programação, HackerRank oferece uma maneira eficiente e envolvente de se preparar para o mercado de trabalho e melhorar suas competências técnicas. Se você está pronto para o desafio, HackerRank pode ser o próximo passo na sua jornada de aprendizado.`,
        link:"",
        tags: [
            "hackerrank",
            "programação",
            "algoritmos",
            "estrutura de dados",
            "competição de programação",
            "entrevistas técnicas",
            "desenvolvimento de software",
            "Python",
            "Java",
            "C++",
            "C#",
            "JavaScript",
            "Ruby",
            "SQL",
            "Go",
            "Kotlin",
            "Swift",
            "PHP",
            "R",
            "Scala",
            "Objective-C",
            "Dart",
            "Perl",
            "TypeScript",
            "Shell",
            "Haskell",
            "Matlab",
            "Julia",
            "Lua"
        ],
        exercicio: {
            nome: "HackerRank",
            paragrafoUm: `Para este exemplo, escolhemos um exercício clássico que testa habilidades de manipulação de strings e lógica. O problema é desafiador e ajuda a entender conceitos básicos de programação, além de ser um ótimo exemplo para quem está aprendendo a programar.`,
            idExercicio: "2 - Simple Array Sum",
            paragrafoDois: `O problema é simples: dada uma lista de inteiros, você deve retornar a soma de todos os elementos da lista. É um exercício ideal para aprender a manipular arrays e realizar operações básicas.`,
            entradaExercicio: `
            6
            1 2 3 4 10 11`,
            saidaExercicio: "31",
            linguagem: "Python",
            codigo:`
    def simpleArraySum(ar):
    return sum(ar)

    # Exemplo de uso:
    if __name__ == '__main__':
    n = int(input().strip())  # Lê o número de elementos
    ar = list(map(int, input().rstrip().split()))  # Lê a lista de inteiros
    result = simpleArraySum(ar)  # Chama a função para calcular a soma
    print(result)  # Imprime o resultado
    `
        } 
    },
    {
        titulo:"Desbravando o Mundo da Programação com a CodinGame",
        subtitulo:"Mergulhando na Diversão da CodinGame",
        introducao:`A CodinGame é uma plataforma inovadora que combina o aprendizado de programação com desafios de codificação envolventes e jogos interativos. Se você está procurando uma maneira divertida e desafiadora de aprimorar suas habilidades de programação, a CodinGame oferece uma abordagem única para resolver problemas e competir com outros desenvolvedores ao redor do mundo.`,
        topicoUm:"Por que usar a plataforma?",
        conteudoTopicoUm:`A CodinGame se destaca por seu foco em gamificação e desafios interativos. Em vez de se limitar a exercícios tradicionais de codificação, a plataforma utiliza jogos e desafios que permitem aos usuários aplicar seus conhecimentos em cenários práticos e lúdicos. Essa abordagem torna o processo de aprendizagem mais envolvente e motivador, ao mesmo tempo em que oferece uma maneira eficaz de melhorar suas habilidades técnicas. É ideal para quem busca combinar diversão com desenvolvimento pessoal.`,
        topicoDois:"Principais Características da Plataforma",
        conteudoTopicoDois: [
            `<strong>Gamificação:</strong> A CodinGame utiliza jogos e desafios para ensinar programação, permitindo que você resolva problemas enquanto se diverte.`,
            `<strong>Competição:</strong> Participe de competições de codificação e veja como você se sai em comparação com outros desenvolvedores ao redor do mundo.`,
            `<strong>Diversidade de Desafios:</strong> Encontre desafios que abrangem uma variedade de tópicos, desde algoritmos básicos até problemas complexos e estratégias avançadas.`,
            `<strong>Feedback Imediato:</strong> Receba feedback instantâneo sobre suas soluções e veja como você pode melhorar.`,
            `<strong>Suporte a Múltiplas Linguagens:</strong> A plataforma suporta uma ampla gama de linguagens de programação, permitindo que você escolha a que melhor se adapta às suas necessidades ou interesses.`,
            `<strong>Linguagens Suportadas:</strong> Python, Java, C++, C#, JavaScript, Ruby, Swift, Go, Kotlin, PHP, TypeScript, Scala, SQL, Objective-C, R, Lua, Bash, Haskell, Perl, Dart`
        ],
        conclusao:`A CodinGame é uma excelente plataforma para quem deseja aprender programação de uma forma inovadora e divertida. Com uma abordagem baseada em jogos e desafios, ela oferece uma maneira única de aprimorar suas habilidades enquanto compete com outros programadores. Suportando uma vasta gama de linguagens de programação, a CodinGame é uma ferramenta versátil para desenvolvedores de todos os níveis, proporcionando uma experiência envolvente e educativa que vai além dos métodos tradicionais de ensino.`,
        link:"https://www.codingame.com/start/",
        tags: [
            "codingame",
            "gamificação",
            "lógica",
            "desafios interativos",
            "resolução de problemas",
            "aprendizado divertido",
            "programação de jogos",
            "algoritmos",
            "inteligência artificial",
            "multiplayer coding",
            "simulações",
            "prática em tempo real",
            "puzzles",
            "competições de código",
            "visualização de código",
            "desenvolvimento de habilidades",
            "codificação criativa",
            "desafio de código",
            "colaboração em equipe",
            "simulação de física",
            "Python",
            "Java",
            "C++",
            "C#",
            "JavaScript",
            "Ruby",
            "Swift",
            "Go",
            "Kotlin",
            "PHP",
            "TypeScript",
            "Scala",
            "SQL",
            "Objective-C",
            "R",
            "Lua",
            "Bash",
            "Haskell",
            "Perl",
            "Dart"
            ],
        exercicio: {
            nome: "CodinGame",
            paragrafoUm: `Para este exemplo, escolhi um exercício da plataforma CodinGame porque ele envolve lógica e resolução de problemas de forma visual e interativa. A plataforma CodinGame é ideal para quem quer aprender programação de maneira divertida e desafiadora, lidando com jogos e desafios que simulam problemas reais.`,
            idExercicio: "Skynet: the Chasm",
            paragrafoDois: `Neste problema, o jogador assume o controle de um personagem que precisa atravessar um abismo, correndo em direção a uma plataforma final. O objetivo é calcular o momento certo para saltar, evitando cair no abismo.`,
            entradaExercicio: `Uma série de comandos indicando o momento em que o personagem deve saltar. Exemplo: 3`,
            saidaExercicio: "Uma série de comandos indicando o momento em que o personagem deve saltar. Exemplo: JUMP",
            linguagem: "Python",
            codigo:`
    # Entrada: a distância entre o ponto inicial e a plataforma final.
    initial_jump_distance = int(input())

    # Loop do jogo, onde a ação de salto será tomada no momento correto.
    while True:
    # Sempre saltar para evitar cair no abismo.
    print("JUMP")
            `
        } 
    },
    {
        titulo:"JavaScript30: Domine o JavaScript em 30 dias!",
        subtitulo:"Uma jornada de 30 dias para se tornar um mestre em JavaScript",
        introducao:`Você está pronto para dar um salto gigante na sua jornada como desenvolvedor web? O JavaScript30 é o seu passaporte para dominar uma das linguagens de programação mais populares e versáteis do mundo. Criado por Wes Bos, este curso intensivo oferece 30 desafios práticos que vão te levar do básico ao avançado em apenas um mês.`,
        topicoUm:"Por que usar o JavaScript30?",
        conteudoTopicoUm:`O foco do JavaScript30 é te proporcionar uma experiência de aprendizado hands-on, onde você coloca em prática os conceitos teóricos de forma divertida e desafiadora. Cada desafio é cuidadosamente elaborado para te ensinar um novo conceito ou técnica, desde os fundamentos do JavaScript até tópicos mais avançados como manipulação do DOM, animações e criação de pequenas aplicações.`,
        topicoDois:"Principais características:",
        conteudoTopicoDois: [
            `<strong>30 desafios práticos:</strong> Uma nova lição a cada dia, com projetos reais para construir.`,
            `<strong>Vídeo-aulas de alta qualidade:</strong> Explicações claras e concisas de cada conceito.`,
            `<strong>Código limpo e bem estruturado:</strong> Aprenda a escrever código organizado e eficiente.`,
            `<strong>Comunidade ativa:</strong> Participe de fóruns e discuta as soluções com outros alunos.`,
            `<strong>Foco em JavaScript puro:</strong> O curso se concentra no JavaScript vanilla, sem frameworks ou bibliotecas.`,
            `<strong>Linguagens suportadas:</strong> JavaScript (é a única linguagem utilizada no curso).`
        ],
        conclusao:`O JavaScript30 é mais do que apenas um curso, é uma experiência completa de aprendizado. Se você está buscando uma maneira eficaz e divertida de aprimorar suas habilidades em JavaScript, o JavaScript30 é a escolha perfeita. Com este curso, você estará pronto para criar aplicações web incríveis e dar o próximo passo na sua carreira como desenvolvedor.`,
        link:"https://javascript30.com/",
        tags: [
            "javascript30", 
            "ES6", 
            "Web Development", 
            "Front-end", 
            "Vanilla JavaScript", 
            "HTML5", 
            "CSS3", 
            "JavaScript Challenges", 
            "Interactive Coding", 
            "DOM Manipulation", 
            "Event Handling", 
            "Asynchronous JavaScript", 
            "Modern JavaScript", 
            "Functional Programming", 
            "Array Methods", 
            "Web APIs", 
            "Coding Practice", 
            "Web Animations", 
            "Form Validation", 
            "JavaScript Projects",
            "JavaScript"
          ],
        exercicio: {
            nome: "JavaScript30",
            paragrafoUm: `Para este exemplo, escolhi um exercício que envolve manipulação de arrays, algo comum em problemas de programação. Ele é ótimo para praticar funções de ordenação e filtragem, que são muito úteis em diversas situações.`,
            idExercicio: "05 - Filtrar e Ordenar Dados de Pessoas Famosas",
            paragrafoDois: `Dado um array com informações de várias pessoas famosas (nome completo e ano de nascimento), você precisa filtrar as pessoas que nasceram no século XVI (1500-1599) e ordená-las pela data de nascimento.`,
            entradaExercicio: `[{ nome: "Galileo Galilei", nascimento: 1564 }, { nome: "Johannes Kepler", nascimento: 1571 }]`,
            saidaExercicio: `[{ nome: "Galileo Galilei", nascimento: 1564 }, { nome: "Johannes Kepler", nascimento: 1571 }]`,
            linguagem: "JavaScript",
            codigo:`
    const pessoasFamosas = [
    { nome: "Galileo Galilei", nascimento: 1564 },
    { nome: "Johannes Kepler", nascimento: 1571 },
    { nome: "Isaac Newton", nascimento: 1642 },
    { nome: "Leonardo da Vinci", nascimento: 1452 },
    { nome: "William Shakespeare", nascimento: 1564 },
    ];

    // Filtrar pessoas nascidas no século XVI (1500-1599)
    const nascidosSeculo16 = pessoasFamosas.filter(
    pessoa => pessoa.nascimento >= 1500 && pessoa.nascimento < 1600
    );

    // Ordenar pelo ano de nascimento
    const ordenadoPorNascimento = nascidosSeculo16.sort(
    (a, b) => a.nascimento - b.nascimento
    );

    console.log(ordenadoPorNascimento);
    `
        } 
    },
    {
        titulo:"100Days of Code: Uma Jornada de Aprendizado",
        subtitulo:"O que é o 100Days of Code?",
        introducao:`O 100Days of Code é uma plataforma e movimento de programação que incentiva desenvolvedores de todos os níveis a se comprometerem com a prática diária de codificação durante 100 dias consecutivos. O foco é simples: codifique todos os dias por pelo menos uma hora e compartilhe seu progresso, criando um hábito que fomenta a consistência e a aprendizagem contínua.`,
        topicoUm:"Por que usar a plataforma?",
        conteudoTopicoUm:`A plataforma 100Days of Code tem um foco específico na prática diária e na construção de disciplina e comprometimento. Seu objetivo é proporcionar um ambiente onde desenvolvedores possam melhorar suas habilidades ao longo do tempo, criando um senso de responsabilidade por meio da documentação pública do progresso, geralmente em redes sociais como o Twitter. A ênfase não está apenas na codificação, mas no desenvolvimento de um hábito duradouro, fundamental para a carreira de qualquer programador.`,
        topicoDois:"Principais Características da Plataforma",
        conteudoTopicoDois: [
            `Uma das grandes vantagens do 100Days of Code é sua flexibilidade e a liberdade de escolher as linguagens de programação que você quer praticar. Embora a plataforma não limite os usuários a uma linguagem ou tecnologia específica, os desenvolvedores frequentemente utilizam as seguintes linguagens para a resolução dos exercícios: JavaScript, Python, Java, Ruby, C++, Swift, PHP, C#, Go, TypeScript, Kotlin, HTML/CSS, SQL, R, Shell Scripting, Perl, Objective-C, Scala, Lua, Haskell.`,
            `Além disso, os programadores podem focar em projetos de diferentes áreas, como desenvolvimento web, ciência de dados, desenvolvimento de jogos, automação e muito mais.`
        ],
        conclusao:`O 100Days of Code não é apenas uma plataforma, mas um compromisso pessoal de aprender e melhorar como desenvolvedor. Com seu foco em consistência e prática diária, ele oferece uma estrutura simples, mas eficaz, para quem deseja aprimorar suas habilidades de programação. Com suporte para uma ampla gama de linguagens, essa jornada de 100 dias ajuda a criar hábitos sólidos e gerar um progresso real, tornando o desenvolvedor mais confiante e habilidoso ao final do desafio.`,
        link:"https://www.100daysofcode.io/",
        tags: [    
            "100daysOfCode",
            "programação",
            "exercícios",
            "desafios",
            "aprendizado",
            "desenvolvimento",
            "lógica",
            "código",
            "prática",
            "algoritmos",
            "soluções",
            "tutorial",
            "programadores",
            "estudos",
            "competição",
            "desenvolvimentoPessoal",
            "codingChallenge",
            "práticaDeCódigo",
            "aprendizadoDeProgramação",
            "desenvolvimentoDeSoftware",
            "Python",
            "JavaScript",
            "Java",
            "C++",
            "C#",
            "Ruby",
            "Swift",
            "PHP",
            "Kotlin",
            "TypeScript",
            "Go",
            "Rust",
            "R",
            "Perl",
            "Scala",
            "Shell",
            "Haskell",
            "Objective-C",
            "Dart",
            "SQL",
            "MATLAB",
            "Lua"
        ],
        exercicio: {
            nome: "100Days of Code",
            paragrafoUm: `Para este exemplo, escolhi um problema relacionado à lógica simples, mas que exige atenção aos detalhes para garantir que a solução esteja correta. Este tipo de exercício ajuda a reforçar o entendimento de estruturas de controle e manipulação de dados.`,
            idExercicio: "#5 - Soma Simples",
            paragrafoDois: `O problema pede para calcular a soma de dois números inteiros. A entrada será dois números inteiros em uma única linha, separados por espaço, e a saída deverá ser o resultado da soma desses dois números.`,
            entradaExercicio: `2 3`,
            saidaExercicio: "5",
            linguagem: "Python",
            codigo:`
    # Função para resolver o problema da soma simples
    def soma_simples():
    # Lê os números inteiros de uma única linha de entrada
    a, b = map(int, input().split())
    # Retorna a soma de 'a' e 'b'
    print(a + b)

    # Chamada da função
    soma_simples()
    `
        } 
    },
    {
        titulo:"Explorando a Plataforma de Prática de Programação TopCoder",
        subtitulo:"Conhecendo o TopCoder",
        introducao:`O TopCoder é uma plataforma renomada que oferece desafios de programação para desenvolvedores de todos os níveis, desde iniciantes até especialistas. Com uma abordagem voltada para a resolução de problemas e a competição, o TopCoder é uma excelente ferramenta para quem deseja aprimorar suas habilidades de programação e participar de competições emocionantes.`,
        topicoUm:"Por que usar a plataforma?",
        conteudoTopicoUm:`O TopCoder é conhecido pelo seu foco em competições de programação e desafios algorítmicos. A plataforma oferece um ambiente dinâmico onde os usuários podem testar e melhorar suas habilidades de resolução de problemas em um cenário competitivo. Com uma ampla gama de problemas e competições regulares, o TopCoder é ideal para aqueles que buscam um desafio contínuo e a oportunidade de se destacar em uma comunidade global de programadores.`,
        topicoDois:"Principais características da plataforma",
        conteudoTopicoDois: [
            `<strong>Competição de Programação:</strong> O TopCoder organiza competições regulares, incluindo maratonas e sprints, que permitem aos participantes testar suas habilidades em um ambiente competitivo.`,
            `<strong>Desafios Algorítmicos:</strong> Oferece uma vasta coleção de problemas algorítmicos que cobrem diversos tópicos e níveis de dificuldade, desde iniciantes até problemas avançados.`,
            `<strong>Ranking e Pontuação:</strong> Os participantes podem acompanhar seu desempenho em competições através de rankings e pontuações, ajudando a medir seu progresso e comparar com outros programadores.`,
            `<strong>Discussões e Comunidade:</strong> A plataforma possui uma comunidade ativa onde os participantes podem discutir problemas, compartilhar soluções e colaborar em projetos.`,
            `<strong>Recursos Educacionais:</strong> Oferece tutoriais, artigos e materiais de referência para ajudar os usuários a melhorar suas habilidades e conhecimentos em programação.`, 
            `<strong>Linguagens Suportadas:</strong> C++, Java, Python, C#, Ruby, Kotlin, JavaScript, Swift, PHP, Go, R, Scala, Perl, Objective-C, Haskell, Dart, MATLAB.` 
        ],
        conclusao:`O TopCoder é uma plataforma poderosa para programadores que desejam desafiar a si mesmos e aprimorar suas habilidades em um ambiente competitivo e estimulante. Com uma ampla gama de problemas e suporte para várias linguagens de programação, oferece uma oportunidade única para aprender e crescer na área de desenvolvimento. Se você está buscando uma maneira de testar suas habilidades, competir com outros programadores e participar de uma comunidade ativa, o TopCoder é uma excelente escolha.`,
        link:"https://www.topcoder.com/",
        tags: [    
            "topcoder",
            "programação",
            "competição",
            "desafios",
            "algoritmos",
            "codificação",
            "resoluçãoDeProblemas",
            "programadores",
            "ranking",
            "comunidade",
            "desenvolvimento",
            "aprendizado",
            "codingChallenge",
            "práticaDeCódigo",
            "software",
            "competiçãoDeProgramação",
            "problemasAlgorítmicos",
            "soluçãoDeProblemas",
            "tutoriais",
            "discussões",
            "C++",
            "Java",
            "Python",
            "C#",
            "Ruby",
            "Kotlin",
            "JavaScript",
            "Swift",
            "PHP",
            "Go",
            "R",
            "Scala",
            "Perl",
            "Objective-C",
            "Haskell",
            "Dart",
            "MATLAB"
        ],
        exercicio: {
            nome: "TopCoder",
            paragrafoUm: `Para este exemplo, escolhi um problema clássico que ajuda a entender conceitos fundamentais de manipulação de strings. Esse tipo de exercício é útil para reforçar habilidades de programação e lógica, e é frequentemente encontrado em competições.`,
            idExercicio: "155 - String Manipulation",
            paragrafoDois: `O problema requer que você encontre o comprimento da maior substring sem caracteres repetidos em uma string dada. A string pode conter qualquer caractere, e você deve identificar a maior sequência contígua sem caracteres repetidos.`,
            entradaExercicio: `abcabcbb`,
            saidaExercicio: "3",
            linguagem: "Python",
            codigo:`
    def length_of_longest_substring(s):
    start = 0
    max_length = 0
    char_index_map = {}

    for end in range(len(s)):
    if s[end] in char_index_map:
    start = max(start, char_index_map[s[end]] + 1)
    char_index_map[s[end]] = end
    max_length = max(max_length, end - start + 1)

    return max_length

    # Exemplo de uso
    input_string = "abcabcbb"
    print(length_of_longest_substring(input_string))  # Saída: 3
    `
        } 
    },
    {
        titulo:"Explorando a Plataforma de Prática de Programação InterviewBit",
        subtitulo:"Conhecendo o InterviewBit",
        introducao:`O InterviewBit é uma plataforma projetada para ajudar os candidatos a se prepararem para entrevistas técnicas e aprimorarem suas habilidades de programação. Oferecendo uma combinação de desafios de codificação e simulações de entrevistas, o InterviewBit é uma ferramenta valiosa para quem busca se destacar em processos seletivos de empresas renomadas.`,
        topicoUm:"Por que usar a plataforma?",
        conteudoTopicoUm:`O InterviewBit é focado em preparar os usuários para entrevistas técnicas, oferecendo uma ampla gama de problemas que refletem questões frequentemente encontradas em processos seletivos de grandes empresas de tecnologia. A plataforma é ideal para quem deseja melhorar suas habilidades de resolução de problemas e se familiarizar com o tipo de questões que podem surgir em uma entrevista técnica.`,
        topicoDois:"Principais características da plataforma",
        conteudoTopicoDois: [
            `<strong>Desafios de Codificação:</strong> A plataforma oferece uma vasta coleção de problemas de programação, organizados por dificuldade e tópicos, para ajudar os usuários a se prepararem para entrevistas técnicas.`,
            `<strong>Simulações de Entrevistas:</strong> Os usuários podem realizar simulações de entrevistas técnicas que replicam o formato e o estilo das entrevistas reais, ajudando a praticar e a ganhar confiança.`,
            `<strong>Discussões e Explicações:</strong> Cada problema vem com uma seção de discussões onde os usuários podem trocar ideias e entender diferentes abordagens para a solução.`,
            `<strong>Progressão Personalizada:</strong> O InterviewBit fornece um caminho de aprendizado personalizado, com recomendações baseadas no progresso e nas áreas de melhoria dos usuários.`,
            `<strong>Recursos Educacionais:</strong> Inclui tutoriais, artigos e dicas para aprimorar as habilidades de programação e se preparar melhor para entrevistas.`,
            `Linguagens Suportadas: C++, Java, Python, C#, Ruby, Kotlin, JavaScript, Swift, PHP, Go, R, Scala, Perl, Objective-C, Haskell, Dart, MATLAB.`
        ],
        conclusao:`O InterviewBit é uma plataforma robusta e eficaz para quem deseja se preparar para entrevistas técnicas com foco em problemas de codificação e simulações realistas. Com uma ampla gama de problemas e suporte para várias linguagens de programação, oferece uma preparação abrangente e personalizada. Se você está se preparando para entrevistas em empresas de tecnologia ou deseja aprimorar suas habilidades de resolução de problemas, o InterviewBit é uma excelente ferramenta para alcançar seus objetivos.`,
        link:"https://www.interviewbit.com/",
        tags: [    
            "InterviewBit",
            "programação",
            "preparaçãoDeEntrevistas",
            "desafios",
            "algoritmos",
            "estruturasDeDados",
            "codificação",
            "entrevistasTécnicas",
            "resoluçãoDeProblemas",
            "preparaçãoParaEntrevistas",
            "desenvolvimentoPessoal",
            "simulaçãoDeEntrevistas",
            "dicasDeEntrevista",
            "práticaDeCódigo",
            "aprendizado",
            "programadores",
            "problemasDeProgramação",
            "candidatosAEmprego",
            "tecnologia",
            "educaçãoTecnológica",
            "C++",
            "Java",
            "Python",
            "C#",
            "Ruby",
            "Kotlin",
            "JavaScript",
            "Swift",
            "PHP",
            "Go",
            "R",
            "Scala",
            "Perl",
            "Objective-C",
            "Haskell",
            "Dart",
            "MATLAB"
        ],
        exercicio: {
            nome: "InterviewBit",
            paragrafoUm: `Para este exemplo, escolhi um problema que é ótimo para entender a manipulação de arrays e o uso de estruturas de dados básicas. Esse tipo de problema é útil para revisar conceitos fundamentais que são frequentemente abordados em entrevistas técnicas.`,
            idExercicio: "3 - Max Sum Contiguous Subarray",
            paragrafoDois: `O problema exige que você encontre a soma máxima de um subarray contíguo em um array de inteiros. É um problema clássico de programação dinâmica e é frequentemente usado para testar a capacidade de lidar com arrays e otimização de algoritmos.
            
            Neste exemplo, o subarray contíguo com a soma máxima é [4, -1, 2, 1], e a soma é 6.`,
            entradaExercicio: `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`,
            saidaExercicio: "6",
            linguagem: "Python",
            codigo:`
    def max_sum_contiguous_subarray(arr):
    max_ending_here = max_so_far = arr[0]

    for x in arr[1:]:
    max_ending_here = max(x, max_ending_here + x)
    max_so_far = max(max_so_far, max_ending_here)

    return max_so_far

    # Exemplo de uso
    input_array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    print(max_sum_contiguous_subarray(input_array))  # Saída: 6`
        } 
    },
    {
        titulo:"Explorando a Plataforma de Prática de Programação FreeCodeCamp",
        subtitulo:"Conhecendo o FreeCodeCamp",
        introducao:`O FreeCodeCamp é uma plataforma de aprendizado de programação e desenvolvimento web que oferece uma abordagem prática e gratuita para quem deseja entrar no mundo da codificação. Com um currículo abrangente e projetos práticos, o FreeCodeCamp é uma excelente opção para quem busca uma formação sólida em desenvolvimento de software.`,
        topicoUm:"Por que usar a plataforma?",
        conteudoTopicoUm:`O FreeCodeCamp é focado em fornecer uma educação prática e acessível em programação e desenvolvimento web. A plataforma oferece uma abordagem de aprendizado baseada em projetos e exercícios práticos, permitindo que os usuários construam um portfólio de projetos reais enquanto aprendem. É ideal para quem busca uma formação abrangente em programação sem custos, com a vantagem adicional de obter certificados reconhecidos na conclusão de seus cursos.`,
        topicoDois:"Principais características da plataforma",
        conteudoTopicoDois: [
            `<strong>Currículo Abrangente:</strong> O FreeCodeCamp oferece um currículo extensivo que abrange desde fundamentos de programação até tópicos avançados em desenvolvimento web, ciência de dados e machine learning.`,
            `<strong>Projetos Práticos:</strong> A plataforma inclui uma série de projetos práticos que ajudam os usuários a aplicar o que aprenderam e a construir um portfólio de trabalho real.`,
            `<strong>Certificados:</strong> Ao completar os desafios e projetos, os usuários recebem certificados que podem ser adicionados ao seu portfólio e currículo.`,
            `<strong>Comunidade Ativa:</strong> O FreeCodeCamp possui uma comunidade global de desenvolvedores e aprendizes que podem ajudar uns aos outros através de fóruns e grupos de estudo.`,
            `<strong>Recursos Educacionais:</strong> Inclui tutoriais em vídeo, artigos e exercícios interativos para apoiar o aprendizado e a prática.`,
            `<strong>Linguagens Suportadas:</strong> HTML, CSS, JavaScript, Python, SQL, React, Node.js, D3.js, Git.
`
        ],
        conclusao:`O FreeCodeCamp é uma plataforma de aprendizado poderosa e acessível para quem deseja se tornar um desenvolvedor web ou aprimorar suas habilidades em programação. Com um currículo abrangente, projetos práticos e uma comunidade de apoio, oferece uma excelente oportunidade para aprender e crescer na área de desenvolvimento de software. Se você está procurando uma maneira prática e gratuita de adquirir habilidades em programação e desenvolvimento web, o FreeCodeCamp é uma excelente escolha.`,
        link:"https://www.freecodecamp.org/",
        tags: [   
            "FreeCodeCamp",
            "programação",
            "educaçãoTecnológica",
            "desenvolvimentoWeb",
            "aprendizadoDeCódigo",
            "desafiosDeCodificação",
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "SQL",
            "React",
            "Node.js",
            "D3.js",
            "Git",
            "certificações",
            "projetosPráticos",
            "currículoGratuito",
            "comunidade",
            "aprendizadoPrático",
            "tutorials",
            "webDevelopment",
            "codingChallenges",
            "programmingTutorials"
        ],
        exercicio: {
            nome: "FreeCodeCamp",
            paragrafoUm: `Para este exemplo, escolhi um exercício clássico de manipulação de strings, que é um dos fundamentos essenciais no desenvolvimento web. Este tipo de exercício é fundamental para praticar habilidades de codificação e entender como trabalhar com strings em JavaScript.`,
            idExercicio: "1 - Convert HTML Entities",
            paragrafoDois: `O problema requer que você converta entidades HTML em seus caracteres correspondentes. Por exemplo, &amp; deve ser convertido para &, &lt; para <, e &gt; para >.`,
            entradaExercicio: `&amp; is an HTML entity for &`,
            saidaExercicio: "& is an HTML entity for &",
            linguagem: "JavaScript",
            codigo:`
            function convertHTML(str) {
    // Mapeia as entidades HTML para seus caracteres correspondentes
    const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
    };

    // Substitui as entidades HTML na string
    return str.replace(/[&<>"']/g, function (match) {
    return htmlEntities[match];
    });
    }

    // Exemplo de uso
    const inputString = "&amp; is an HTML entity for &";
    console.log(convertHTML(inputString));  // Saída: & is an HTML entity for &
    `
        } 
    }
]