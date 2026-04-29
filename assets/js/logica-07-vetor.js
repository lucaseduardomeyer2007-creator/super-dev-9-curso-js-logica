function exemplo01() {

    let carros = [];
    carros.push("BMW m3"); // índice 0, posição Primeira posição

    carros.push("Byd Seal"); // índice 1, posição Segunda posição

    carros.push("Mobi"); // índice 2, posição Terceira

    carros.push("Chevet"); // índice 3, posição Quarta posição

    carros[3] = "Chevette";

    carros.splice(2, 1); // Apagar o Mobi

    alert("Quantidade de elementos: " + carros.length +
        "\nPrimeiro: " + carros[0] +
        "\nSegundo: " + carros[1] +
        "\nTerceiro: " + carros[2] // Chevette
    );
}

function exemplo02() {
    let alunos = [];
    let frequencias = [];
    let status = [];

    alunos.push(prompt("Digite o nome do aluno"))
    frequencias.push(parseInt(prompt("Digite o percentual da sua frequência")))

    alunos.push(prompt("Digite o nome do aluno"))
    frequencias.push(parseInt(prompt("Digite o percentual de frequência")))

    if (frequencias[0] >= 70) {
        status.push("Aprovado");
    }
    else {
        status.push("Reprovado");
    }

    if (frequencias[1] >= 70) {
        status.push("Aprovado")
    }
    else {
        status, push("Reprovado");
    }

    alert("Alunos:" +
        "\nNome: " + aluno[0] +
        "\nFrequencia: " + frequencias[0] +
        "\nStatus: " + status[0] +
        "\n\nNome: " + alunos[1] +
        "\nFrequencia: " + frequencias[1] +
        "\nStatus: " + status[1]
    )
}


function exercicio01() {
    let perfumes = [];

    perfumes.push("Saint laurent");

    perfumes.push("Dior Savage");

    perfumes.push("One Million");

    perfumes.push("212 vip");

    perfumes.push("Dior Savage")

    perfumes[1] = "Chanel";

    perfumes.splice(0, 1)

    alert("Lista dos perfumes: " + perfumes.length +
        "\nPrimeiro: " + perfumes[0] +
        "\nSegundo: " + perfumes[1] +
        "\nTerceiro: " + perfumes[2] +
        "\nQuarto: " + perfumes[3])
}



function exercicio02() {
    let materias = [];
    let cargaHoraria = [];
    let valoresHoras = [];

    materias.push("Geografia")
    cargaHoraria.push(parseInt(80))
    valoresHoras.push(parseFloat(18.80))

    materias.push("História")
    cargaHoraria.push(parseInt(80))
    valoresHoras.push(parseFloat(18.0))

    materias.push("Português")
    cargaHoraria.push(parseInt(110))
    valoresHoras.push(parseFloat(25.50))


    materias[1] = "Física"
    cargaHoraria[0] = parseInt(75)

    alert(" Matéria: " + materias[0] +
        " Carga Horária: " + cargaHoraria[0] + "h" +
        " Valores horas: " + valoresHoras[0] +
        "\n Matéria: " + materias[1] +
        " Carga Horária: " + cargaHoraria[1] + "h" +
        " Valores Horas: " + valoresHoras[1] +
        " \nMatéria: " + materias[2] +
        " Carga Horária: " + cargaHoraria[2] + "h" +
        " valores Horas: " + valoresHoras[2]
    )
}

function exercicio03() {

    let destinosTuristicos = [];


    destinosTuristicos.push(prompt("Digite um destino turístico"))

    destinosTuristicos.push(prompt("Digite um destino turístico"))

    destinosTuristicos.push(prompt("Digite um destino turístico"))

    destinosTuristicos.push(prompt("Digite um destino turístico"))

    destinosTuristicos.push(prompt("Digite um destino turístico"))

    destinosTuristicos[1] = prompt("Digite um novo destino turístico")

    destinosTuristicos.splice(0, 1)

    console.log(
        "\nDestino turístico 1: " + destinosTuristicos[0] +
        "\nDestino turístico 2: " + destinosTuristicos[1] +
        "\nDestino turístico 3: " + destinosTuristicos[2] +
        "\nDestino turístico 4: " + destinosTuristicos[3]
    )
}

function exercicio04() {

    let restaurantes = [];
    let cidades = [];
    let valoresMedios = [];

    restaurantes.push(prompt("Digite o nome de um restaurante"))

    cidades.push(prompt("Cidade onde está localizado"))

    valoresMedios.push(parseInt(prompt("Digite o valor por pessoa")))


    restaurantes.push(prompt("Digite o nome de um restaurante"))

    cidades.push(prompt("Cidade onde está localizado"))

    valoresMedios.push(parseInt(prompt("Digite o valor por pessoa")))



    restaurantes.push(prompt("Digite o nome de um restaurante"))

    cidades.push(prompt("Cidade onde está localizado"))

    valoresMedios.push(parseInt(prompt("Digite o valor por pessoa")))

    restaurantes[0] = prompt("Digite um nome de outro restaurante")

    valoresMedios[2] = parseInt(prompt("Digite um novo valor para o terceiro restaurante"))

    alert("Restaurante 1: " + restaurantes[0] +
        " Cidade onde está localizada: " + cidades[0] +
        " Valor médio por pessoa: " + valoresMedios[0] +

        "\nRestaurante 2: " + restaurantes[1] +
        " Cidade onde está localizada: " + cidades[1] +
        " Valor médio por pessoa: " + valoresMedios[1] +


        "\nRestaurante 3: " + restaurantes[2] +

        " Cidade onde está localizada: " + cidades[2] +
        " Valor médio por pessoa: " + valoresMedios[2]
    )
}


function exercicio05() {
    let filmes = [];
    let generos = [];
    let duracoes = [];
    let duracoesHoras = [];

    // Entrada de dados para 4 filmes (sem for/while)
    filmes.push(prompt("Digite o nome do filme 1"));
    generos.push(prompt("Digite o gênero do filme 1"));
    duracoes.push(parseFloat(prompt("Digite a duração do filme 1 em minutos")));
    duracoesHoras.push(duracoes[0] / 60);

    filmes.push(prompt("Digite o nome do filme 2"));
    generos.push(prompt("Digite o gênero do filme 2"));
    duracoes.push(parseFloat(prompt("Digite a duração do filme 2 em minutos")));
    duracoesHoras.push(duracoes[1] / 60);

    filmes.push(prompt("Digite o nome do filme 3"));
    generos.push(prompt("Digite o gênero do filme 3"));
    duracoes.push(parseFloat(prompt("Digite a duração do filme 3 em minutos")));
    duracoesHoras.push(duracoes[2] / 60);

    filmes.push(prompt("Digite o nome do filme 4"));
    generos.push(prompt("Digite o gênero do filme 4"));
    duracoes.push(parseFloat(prompt("Digite a duração do filme 4 em minutos")));
    duracoesHoras.push(duracoes[3] / 60);

    // Alterar gênero do segundo filme
    generos[1] = prompt("Digite um novo gênero para o segundo filme");

    // Alterar duração do primeiro filme
    duracoes[0] = parseFloat(prompt("Digite a nova duração do primeiro filme em minutos"));
    duracoesHoras[0] = duracoes[0] / 60; // recalcular em horas

    // Remover o último filme usando splice
    filmes.splice(3, 1);
    generos.splice(3, 1);
    duracoes.splice(3, 1);
    duracoesHoras.splice(3, 1);

    // Exibir os dados dos filmes restantes
    alert(
        "Filme 1: " + filmes[0] +
        "\nGênero: " + generos[0] +
        "\nDuração (min): " + duracoes[0] +
        "\nDuração (h): " + duracoesHoras[0].toFixed(2) + "\n\n" +

        "Filme 2: " + filmes[1] +
        "\nGênero: " + generos[1] +
        "\nDuração (min): " + duracoes[1] +
        "\nDuração (h): " + duracoesHoras[1].toFixed(2) + "\n\n" +

        "Filme 3: " + filmes[2] +
        "\nGênero: " + generos[2] +
        "\nDuração (min): " + duracoes[2] +
        "\nDuração (h): " + duracoesHoras[2]
    )
    // Mostra no alerta
    alert(resultado);

    // Mostra também no console
    console.log(resultado);
}


function exercicio06() {

    let produtos = [];
    let quantidades = [];
    let precos = [];
    let valoresTotais = [];

    produtos.push(prompt("Digite o produto"))
    quantidades.push(parseInt(prompt("Digite a quantidade do produto")))
    precos.push(parseFloat(prompt("Digite o valor unitário do produto")))
    
    
    
    produtos.push(prompt("Digite o produto"))
    quantidades.push(parseInt(prompt("Digite a quantidade do produto")))
    precos.push(parseFloat(prompt("Digite o valor unitário do produto")))
    
    
    
    produtos.push(prompt("Digite o produto"))
    quantidades.push(parseInt(prompt("Digite a quantidade do produto")))
    precos.push(parseFloat(prompt("Digite o valor unitário do produto")))
    
    

    produtos.push(prompt("Digite um novo produto"))
    quantidades.push(parseInt(prompt("Digite a quantidade do produto")))
    precos.push(parseFloat(prompt("Digite o valor unitário do produto")))


    produtos.splice(0, 1)

    valoresTotais = valoresTotais + produtos

    alert(
    "Produto 1: " + produtos[0] +
    " quantidade: " + quantidades[0] +
    " preco unitário: " + precos[0] + valoresTotais[0] +
    "\n Produto 2: " + produtos[1] +
    " quantidade: " + quantidades[1] +
    " preco unitário: " + precos[1] + valoresTotais[1] +
    "\n Produto 3: " + produtos[2] +
    " quantidade: " + quantidades[2] +
    " preco unitário: " + precos[2] + valoresTotais[2] 
    
)
}
function exercicio06() {
    let produtos = [];
    let quantidades = [];
    let precos = [];
    let valoresTotais = [];

    // Entrada de 3 produtos
    produtos.push(prompt("Digite o produto 1"));
    quantidades.push(parseInt(prompt("Digite a quantidade do produto 1")));
    precos.push(parseFloat(prompt("Digite o valor unitário do produto 1")));
    valoresTotais.push(quantidades[0] * precos[0]);

    produtos.push(prompt("Digite o produto 2"));
    quantidades.push(parseInt(prompt("Digite a quantidade do produto 2")));
    precos.push(parseFloat(prompt("Digite o valor unitário do produto 2")));
    valoresTotais.push(quantidades[1] * precos[1]);

    produtos.push(prompt("Digite o produto 3"));
    quantidades.push(parseInt(prompt("Digite a quantidade do produto 3")));
    precos.push(parseFloat(prompt("Digite o valor unitário do produto 3")));
    valoresTotais.push(quantidades[2] * precos[2]);

    // Novo produto
    produtos.push(prompt("Digite o novo produto"));
    quantidades.push(parseInt(prompt("Digite a quantidade do novo produto")));
    precos.push(parseFloat(prompt("Digite o valor unitário do novo produto")));
    valoresTotais.push(quantidades[3] * precos[3]);

    // Alterar preço do segundo produto
    precos[1] = parseFloat(prompt("Digite o novo preço do segundo produto"));
    valoresTotais[1] = quantidades[1] * precos[1]; // recalcular

    // Apagar o primeiro produto
    produtos.splice(0, 1);
    quantidades.splice(0, 1);
    precos.splice(0, 1);
    valoresTotais.splice(0, 1);

    // Exibir os dados
    alert(
        "Produto 1: " + produtos[0] +
        "\nQuantidade: " + quantidades[0] +
        "\nPreço unitário: " + precos[0] +
        "\nValor total: " + valoresTotais[0] + "\n\n" +

        "Produto 2: " + produtos[1] +
        "\nQuantidade: " + quantidades[1] +
        "\nPreço unitário: " + precos[1] +
        "\nValor total: " + valoresTotais[1] + "\n\n" +

        "Produto 3: " + produtos[2] +
        "\nQuantidade: " + quantidades[2] +
        "\nPreço unitário: " + precos[2] +
        "\nValor total: " + valoresTotais[2]
    )
}
