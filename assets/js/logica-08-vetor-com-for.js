function exemplo01() {
    //solicitar o nome de 3 pessoas e apresentar

    let nomes = [];

    // i = i + 1;
    // i += 1;
    // i++;

    for (let i = 0; i < 3; i += 1) {
        nomes.push(prompt("Digite o nome"));
    }

    for (let i = 0; i < 3; i += i) {
        alert(nomes[i]);
    }
}

function exemplo02() {
    let alunos = [];
    let notas1 = [];
    let notas2 = [];

    for (let i = 0; i < 3; i += 1) {
        let nomeAluno = prompt("Digite o nome do aluno: ");
        let notas1 = parseFloat(prompt("Digite a nota 1"));
        let notas2 = parseFloat(prompt("Digite a nota 2"));

        alunos.push(nomeAluno);
        notas1.push(nota1);
        notas2.push(notas2);
    }

    // apresentar a média de cada aluno

    for (let i = 0; i < 3; i += 1) {
        let nota1 = notas1[i]; x
        let nota2 = notas2[i];
        let media = (nota1 + nota2) / 2;

        let status = "";
        if (media < 7) {
            status = "Reprovado";
        } else {
            status = "Aprovado";
        }

        alert(alunos[i] + " tem a média: " + media + " status é: " + status);
    }
}


function exemplo03() {
    //Solicitar colaborador, quantidade horas, valor  
    //Qual o maior valor hora pago
    //Colaborador com maior salário
    //Colaborador menor nome

    let colaboradores = [];
    let horas = [];
    let valores = [];
    let salarios = [];


    let quantidade = parseInt(prompt("Digite a quantidade de colaboradores"));

    for (let i = 0; i < quantidade; i = i += 1) {
        //Solicitando os dados dos colaboradores
        let colaborador = prompt("Digite o nome do colaborador")
        let quantidadeHoras = parseInt(prompt("Digite a quantidade de horas"));
        let valorHora = parseFloat(prompt("Digite o valor hora"));

        colaboradores.push(colaborador);
        horas.push(quantidadeHoras);
        valores.push(valorHora)
    }

    //Calcular os salários armazenando no vetor de salários
    // for: Percorrendo cada um dos colaboradores
    for (let i = 0; i < quantidade; i += 1) {
        //Pegando do vetor de horas o valor armazenado naquela posição percorrida
        let salario = quantidadeHoras * valorHora;
        //Armazenar o salário que foi calculado
        salarios.push(salario);
    }

    //Descobrir o maior valor hora entre os colaboradores
    debugger
    let maiorValorHora = 0;
    for (let i = 0; i < quantidade; i = +1) {
        let valorHora = valores[i];

        if (valorHora > maiorValorHora) {
            maiorValorHora = valorHora;
        }
    }

    //Descobrir colaborador com maior salário
    let maiorSalario = 0;
    let nomeMaiorSalario = "";
    //Percorrer o vetor de salarios para descobrir o maior salário
    // Armazenando na variável o maior salário e nome de quem possuí o maior salário

    for (let i = 0; i < quantidade; i += 1) {
        let salario = salarios[i];
        let colaborador = colaboradores[i];
        //
        if (salario > maiorSalario) {
            maiorSalario = salario;
            nomeMaiorSalario = colaborador;
        }
        // Forma Alternativa
        // if(salarios[i] > maiorSalario) {
        //     maiorSalario = salarios[i];
        //     nomeMaiorSalario = colaboradores[i];
        //  }
    }

    //  Descobrir quem tem o menor nome
    let colaboradorMenorNome = "csrtadyghbunijasdbuyvtcrxeactygvhndijakmibhuyvgtcdrxeastcdyuhbinjaso";
    for (let i = 0; i < quantidade; i += 1) {
        let colaborador = colaboradores[i];
        if (colaborador.length < colaboradorMenorNome.length) {
            colaboradorMenorNome = colaborador;
        }
    }

    alert("O maior valor hora pago: " + maiorValorHora +
        "\nColaborador com maior salário: " + nomeMaiorSalario +
        "\nColaborador menor nome: " + colaboradorMenorNome
    )
}


function exemploMenu() {
    let numeros = [];

    let opcaoMenu = parseInt(prompt(`1 - cadastrar
2 - Listar todos
3 - Apresentar maior
10 - Sair`));
    while (opcaoMenu !== 10) {
        if (opcaoMenu === 1) {
            let numero = parseInt(prompt("Digite o número"));
            numeros.push(numero);
            alert("Número cadastrado com sucesso");
        }
        else if (opcaoMenu === 2) {
            let texto = "Números cadastrados:\n";
            for (let i = 0; i < numeros.length; i += 1) {
                let numero = numeros[i];
                texto = texto + numero + "\n";
            }
            alert(texto);
        }
        else if (opcaoMenu === 3) {
            debugger
            let maiorNumero = 0;
            for (let i = 0; i < numeros.length; i += 1) {
                if (numeros[i] > maiorNumero)
                    maiorNumero = numeros[i]
            }

            alert("Maior número: " + maiorNumero);
        }

        opcaoMenu = parseInt(prompt(`1 - Cadastrar
2 - Listar todos    
3 - Apresentar maior    
10 - Sair`))
    }

    alert("Obrigado por utilizar nosso sistema")
}




function exercicio01() {

    let nomes = [];

    for (let i = 0; i < 3; i += 1) {
        nomes.push(prompt("Digite o nome"))
    }

    for (let i = 0; i < 3; i += 1) {
        alert(nomes[i])
    }
}

function exercicio02() {
    let idades = []

    for (i = 0; i < 4; i += 1) {
        idades.push(prompt("Digite a idade de 4 pessoas"))
    }

    for (i = 0; i < 4; i += 1) {
        alert(idades[i])
    }
}


function exercicio03() {

    let cidades = [];
    for (i = 0; i < 5; i += 1) {

        cidades.push(prompt("Digite o nome de 5 cidades"));

    }

    for (i = 0; i < 5; i += 1) {
        alert(cidades[i])

    }

    let texto = "Cidades cadastrados: \n"
    for (i = 0; i < cidades.length; i += 1) {
        let cidadesCadastradas = cidades[i]
        texto = texto + cidadesCadastradas + "\n"
    }
    alert(texto)
}

function exercicio04() {
    let numeros = [];
    let soma = 0
    for (i = 0; i < 5; i += 1) {
        numeros.push(parseInt(prompt("Digite 5 números")))
    }

    for (i = 0; i < 5; i += 1) {

        soma = soma + numeros[i]
    }
    alert(soma)
}

function exercicio05() {
    let notas = [];
    let soma = 0
    let media = 0;

    for (i = 0; i < 4; i += 1) {
        notas.push(parseFloat(prompt("Digite as 4 notas")))
    }

    for (i = 0; i < 4; i += 1) {

        soma = soma + notas[i]
    }
    media = media + soma / 4
    alert(media)
}

function exercicio06() {
    produtos = [];

    for (i = 0; i < 4; i += 1) {

        produtos.push(prompt("Digite seus produtos"))

    }
    for (i = 0; i < 4; i += 1) {

        alert(produtos)

    }

    produtos[2] = prompt("Digite um novo nome para o terceiro produto")

    for (i = 0; i < 4; i += 1) {

        alert(produtos)
    }
}

function exercicio07() {
    temperaturas = [];


    for (let i = 0; i < 5; i += 1) {

        temperaturas.push(parseInt(prompt("Digite as 5 temperaturas")))
    }
    let maiorTemperatura = 0;
    for (let i = 0; i < temperaturas.length; i += 1) {

        if (temperaturas > maiorTemperatura) {

            maiorTemperatura = temperaturas[i]
        }
    }

    alert(maiorTemperaturas)
}


function exercicio08() {
    let precos = []

    for (let i = 0; i < 4; i += 1) {

        precos.push(parseFloat(prompt("Digite os 4 preços")))
    }
    let menorPreco = 9999999;

    for (let i = 0; i < precos.length; i += 1) {

        if (precos[i] < menorPreco) {

            menorPreco = precos[i]
        }
    }
    alert(menorPreco)
}

function exercicio09() {

    let numeros = []

    for (i = 0; i < 6; i += 1) {

        numeros.push(parseInt(prompt("Digite 6 números")))
    }
    let numeroPar = 0;
    for (i = 0; i < 6; i += 1) {

        if (i % 2 === 0) {

            numeroPar = numeros[i]
        }
    }

    alert(numeroPar)
}

function exercicio10() {

    let alunos = []

    for (let i = 0; i < 5; i += 1) {

        alunos.push(prompt("Digite o nome dos 5 alunos"))

    }

    let nomePesquisa = prompt("Digite o nome para pesquisar")
    nomeEncontrado = false
    for (let i = 0; i < 6; i += 1) {

        if (nomePesquisa === alunos[i]) {

            nomeEncontrado = true
        }

    }

    if (nomeEncontrado === true) {

        alert("Nome encontrado")
    }
    else {
        alert("Nome não encontrado")
    }
}

function exercicio11() {

    let numeros = []

    for (let i = 0; i < 6; i += 1) {

        numeros.push(parseInt(prompt("Digite os 6 números")))
    }
    let maiorNumero = 0;

    for (let i = 0; i < 6; i += 1) {

    }
    alert(numeros)
    for (let i = 0; i < numeros.length; i += 1) {

        if (numeros >= 10) {

            maiorNumero = numeros
        }

    }
    alert(maiorNumero)
}


function exercicio12() {

    nomes = [];

    for (let i = 0; i < 5; i += 1) {

        nomes.push(prompt("Digite 5 nomes"))

    }

    let contarNomes = 0;

    for (let i = 0; i < 5; i += 1) {

        if (nomes[i].length >= 5) {
            contarNomes = contarNomes + 1

        }


    }
    alert(contarNomes)
}


function exercicio13() {

    idades = [];


    for (i = 0; i < 7; i += 1) {

        idades.push(parseInt(prompt("Digite as 7 idades")))

    }
    let menorIdade = 0;
    let maiorIdade = 0;

    for (i = 0; i < 7; i += 1) {

        if (idades[i] < 18) {

            menorIdade = menorIdade + 1;
        }

        else {
            maiorIdade = maiorIdade + 1;

        }

    }
    alert("quantidade de menores de idade: " + menorIdade +
        "\n quantidade dos maiores de idade: " + maiorIdade
    )
}

function exercicio14() {
    notas = [];

    for (i = 0; i < 6; i += 1) {

        notas.push(parseFloat(prompt("Digite as 6 notas")))
    }
    for (i = 0; i < notas[i]; i += 1) {

        alert(notas)
    }
    let maiorNota = 0;
    for (i = 0; i < 6; i += 1) {

        if (notas[i] >= 7) {

            maiorNota = maiorNota + 1
        }
    }
    alert("Quantidade de notas maiores que 7: " + maiorNota)
}

function exercicio15() {

    cidades = [];

    for (let i = 0; i < 4; i += 1) {

        cidades.push(prompt("Digite 4 cidades"))

    }


    cidades[3] = prompt("Digite uma nova cidade");

    for (let i = 0; i < 4; i += 1) {

        alert(cidades[i])

    }
}


function exercicio16() { //AJUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

    produtos = [];

    for (i = 0; i < 5; i += 1) {

        produtos.push(prompt("Digite 5 produtos"))

    }
}


function exercicio17() {

    numeros = [];


    for (i = 0; i < 8; i += 1) {
        numeros.push(parseInt(prompt("Digite 8 números")))
    }

    let numerosPares = 0;

    let numerosImpares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            numerosPares = numerosPares + numeros[i];
        }
        else {
            numerosImpares = numerosImpares + numeros[i];
        }
    }
    alert("Soma dos números pares: " + numerosPares +
        "\nSoma dos números ímpares: " + numerosImpares
    )
}

function exercicio18() {
    
}