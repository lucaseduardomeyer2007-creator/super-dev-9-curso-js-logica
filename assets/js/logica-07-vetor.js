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


    filmes.push(prompt("Digite o nome de um filme"))
    generos.push(prompt("Digite o genero do filme"))
    duracoes.push(parseFloat(prompt("Digite a duração do filme em minutos")))


    filmes.push(prompt("Digite o nome de um filme"))
    generos.push(prompt("Digite o genero do filme"))
    duracoes.push(parseFloat(prompt("Digite a duração do filme em minutos")))



    filmes.push(prompt("Digite o nome de um filme"))
    generos.push(prompt("Digite o genero do filme"))
    duracoes.push(parseFloat(prompt("Digite a duração do filme em minutos")))

    
    filmes.push(prompt("Digite o nome de um filme"))
    generos.push(prompt("Digite o genero do filme"))
    duracoes.push(parseFloat(prompt("Digite a duração do filme em minutos")))


    generos[1] = prompt("Digite um novo genero para o segundo filme")
    duracoes[0] = prompt("Qual a nova duração do primeiro filme")

    filmes.splice(3, 1)
    duracoes.splice(3, 1)
    duracoesHoras.splice(3, 1)
    generos.splice(3, 1)
    
    if(duracoes > 60) {
        duracoesHoras = duracoes / 60
    }

    alert(
    "Filme 1: " + filmes[0] +
    "Genero: " + generos[0] +
    "duracoes: " + duracoes[0] +
    " Duracoes em horas: " + duracoesHoras[0] +
    "\nFilme 2: " + filmes[1] +
    " Genero: " + generos[1] +
    " duracoes: " + duracoes[1] +
    " Duracoes em horas: " + duracoesHoras[1] +
    "\nFilme 3: " + filmes[2] +
    " Genero: " + generos[2] +
    " duracoes: " + duracoes[2] +
    " Duracoes em horas: " + duracoesHoras[2] +
    "\nFilme 4: " + filmes[3] +
    " Genero: " + generos[3] +
    " duracoes: " + duracoes[3] +
    " Duracoes em horas: " + duracoesHoras[3] 
    )

}