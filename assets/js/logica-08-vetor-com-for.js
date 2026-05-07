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
    let maiorTemperatura = 0;

    for (i = 0; i < 5; i += 1) {

        temperaturas.push(parseInt(prompt("Digite as 5 temperaturas")))

    
    }
    let temperatura = temperaturas[i]
    for (i = 0; i < 5; i += 1) {

        if(temperatura > maiorTemperatura) {

            maiorTemperatura = temperaturas
        }
    
    alert(maiorTemperatura)
    }
}