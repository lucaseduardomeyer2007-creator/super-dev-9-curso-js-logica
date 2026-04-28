function exemploForBasico() {
    /*
    // Declaração da variável
    let indice = 0;
    //Condição 
    while(indice < 4) {
    alert
    
    }
    */

    for (let indice = 0; indice < 4; indice = indice + 1) {
        alert(indice)
    }
    // todo while pode virar for? Depende,  é possível converter
    // quando tem repetições definidas (repetirá 10 vezes por)
    // todo for pode virar um while? Sim
    // for => 0..3 => WHILE
}

function exemploForJogos() {
    let total = 0;

    for (let indice = 0; indice < 3; indice = indice + 1) {
        let nome = prompt("Digite o nome do jogo");

        let preco = parseFloat(prompt("Digite o preço"));

        // variável recebe ela mesma mais o que deseja somar
        total = total + preco;
    }

    alert("Total: " + total);
}

function exemploForProdutos() {
    //Padaria, utensilio e Carnes

    let quantidadePadaria = 0, quantidadeUtensilios = 0, quantidadeCarnes = 0;

    for (let indice = 0; indice < 6; indice = indice + 1) {
        let produto = prompt("Digite o nome do produto");
        let categoria = prompt("Digite  a categoria do produto");

        while ((categoria.toLowerCase() !== "carnes") &&
            (categoria.toLowerCase() !== "padaria") &&
            (categoria.toLowerCase() !== "utensilios")) {
            (categoria = prompt("Categoria inválida.\nDigite a categoria do produto [Carnes, Padaria, Utensilios]:").trim());
        }


        let preco = parseFloat(prompt("Digite o preço do produto"));

        if (categoria.toLowerCase() === "padaria") {
            quantidadePadaria = quantidadePadaria + 1;
        }
        if (categoria.toLowerCase() === "utensilios") {
            quantidadeUtensilios = quantidadeUtensilios + 1;
        }
        if (categoria.toLowerCase() === "carnes") {
            quantidadeCarnes = quantidadeCarnes + 1;
        }
    }
    alert("Quantidade Padaria: " + quantidadePadaria +
        "Quantidade Utensilios: " + quantidadeUtensilios +
        "Quantidade de Carnes: " + quantidadeCarnes
    )
}

function exemploContagemRegressiva() {
    // for (variável; condicao, incremento/decremento)
    for (let indice = 10; indice > 0; indice = indice - 1) {

        alert(indice)
    }
}

function exemploDescobrirQuantidadePar() {
    let quantidadePares = 0;

    let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números a validar"));

    for (let indice = 0; indice < quantidadeNumeros; indice = indice + 1) {
        let numero = parseInt(prompt("Digite o número"));

        if (numero % 2 == 0) {
            quantidadePares = quantidadeNumeros + 1;
        }

        // descobrir ímpar (numero % 2 != 0)
    }

    alert("Quantidade de números pares");
}

function exercicio01MostrarNumeros() {

    for (let indice = 0; indice < 6; indice = indice + 1) {
        alert(indice)
    }
}


function exercicio02MostrarNomeVariasVezes() {
    let nome = prompt("Digite um nome");

    for (let indice = 0; indice < 3; indice = indice + 1) {
        console.log(nome)
    }
}

function exercicio03ContarAteDez() {

    for (let indice = 0; indice < 11; indice = indice + 1) {

        console.log(indice);

    }

}


function exercicio04ContarRegressivo() {

    for (let indice = 5; indice > 0; indice = indice - 1) {

        console.log(indice);

    }
}

/*
function exercicio03SomarIdadesPacientes() {
    let indice = 0;
    let idade = 0;
    let somaIdade = 0;

    while (indice < 6) {
        idade = parseInt(prompt("Digite sua idade"))
        alert(idade)

        somaIdade = somaIdade + idade


        indice = indice + 1;
    }
*/


function exercicio05SomarNumeros() {
    for (indice = 0; indice < 6; indice = indice + 1) {

        let soma = soma + indice

        console.log(soma);

    }
}


function exercicio06MostrarNumerosPares() {

    for (let indice = 0; indice < 11; indice = indice + 1) {

        if (indice % 2 === 0) {
            console.log(indice);

        }
    }
}

function exercicio07MostrarNumerosImpares() {

    for (let indice = 0; indice < 11; indice = indice + 1)

        if (indice % 2 != 0) {

            console.log("Numero impar " + indice);

        }
}

function exercicio08SolicitarTresNomes() {
    let nomeTres = " "

    for (indice = 0; indice < 3; indice = indice + 1) {
        let nome = prompt("Digite seu nome")
        nomeTres = nomeTres + nome + " "
    }
    console.log(nomeTres);
}

function exercicio09SomarTresIdades() {
    let soma = 0;

    for (let indice = 0; indice < 3; indice = indice + 1) {
        let idade = parseInt(prompt("Digite sua idade"));

        soma = soma + idade
    }

    console.log("Resultado final:", soma);
}

function exercicio10CalcularMediaSimples() {
    let somaNotas = 0;

    for (indice = 0; indice < 3; indice = indice + 1) {
        let nota = parseInt(prompt("Digite sua nota"))

        somaNotas = somaNotas + nota / 3;
    }

    console.log(somaNotas);

}


function exercicio11ContarMaioresDeIdade() {

    let contador = 0;
    for (indice = 0; indice < 5; indice = indice + 1) {
        let idade = parseInt(prompt("Digite sua idade"))
        if (idade >= 18) {
            contador = contador + 1;
        }

    }
    console.log("Total de maiores de idade:", contador)
}

function exercicio12MostrarTabuada() {
    let numero = parseInt(prompt("Digite um número para ver a tabuada"))

    for (let indice = 1; indice <= 10; indice = indice + 1) {
        console.log(numero + " x " + indice + " = " + (numero * indice));
    }
}


function exercicio13ContarLetrasNomes() {
    for (let indice = 0; indice < 4; indice = indice + 1) {

        let nome = prompt("Digite um nome da pessoa" + (indice + 1));

        console.log("O nome " + nome + " possui " + nome.length + " letras");
    }
}

function exercicio14MaiorNumero() {
    let maiorNumero = 0;
    for (indice = 0; indice < 4; indice = indice + 1) {
        let numero = parseInt(prompt("Digite um número"))
        if (numero > maiorNumero) {
            maiorNumero = numero
        }
    }
    console.log("O maior número é " + maiorNumero);
}


function exercicio15MenorNumero() {
    let menorNumero = 900000000000000000000000000000000000000000000000000000000000000000;
    for (indice = 0; indice < 4; indice = indice + 1) {
        let numero = parseInt(prompt("Digite um número"))
        if (numero < menorNumero) {
            menorNumero = numero
        }
    }
    console.log("O menor número é " + menorNumero);
}

function exercicio16ContarPositivos() {

    for (indice = 0; indice < 5; indice = indice + 1) {

        let numero = parseInt(prompt("Digite um número"))

        numeroTotal = +"Quantidade de numeros acima de 0" + numeroTotal + numero
        if (numero >= 0) {
            alert("O número é positivo")
        }
        console.log(numero + " Quantidade de números acima de 0" + numeroTotal);

    }

}

function exercicio17SomarPares() {
    let soma = 0;
    for (let indice = 0; indice < 4; indice = indice + 1) {
        let numero = parseInt(prompt("Digite 5 números"))

        if (numero % 2 === 0) {
            soma = soma + numero
        }
    }
    console.log(soma);
}

function exercicio18MostrarMultiplosDeTres() {

    for (let indice = 0; indice < 29; indice = indice + 1) {
        let numero = parseInt(prompt("Digite um número que seja divisor de 3 até 30"))
        if (numero % 3 === 0) {
            alert("Esse número é múltiplo de 3")
        }
        else {
            alert("Esse número não é múltiplo de 3")

        }

    }

}

function exercicio19CadastrarProdutos() {

    for (let indice = 0; indice < 3; indice = indice + 1) {

        let nomeProduto = prompt("Digite um produto");

    }
    console.log("Produtos cadastrados com sucesso");
}

function exercicio20RelatorioSimples() {
    let soma = 0;
    let media = 0;

    let pessoasCadastradas = 0;
    for (let indice = 0; indice < 3; indice = indice + 1) {
        let nome = prompt("Digite seu nome");
        let idade = parseInt(prompt("Digite sua idade"))

        pessoasCadastradas = pessoasCadastradas + 1;
        soma = soma + idade;
        media = media + idade / 3;
    }

    console.log("Quantidades de pessoas cadastradas: " + pessoasCadastradas + "\n" + "Soma das idades: " + soma + "\n" + "Média das idades: " + media);
}


function exercicio21MostrarNumerosParesIntervalo() {
    let comeco = parseInt(prompt("Digite o número do começo"))
    let fim = parseInt(prompt("Digite o número final"))

    for (indice = comeco; indice <= fim; indice = indice + 1) {

        if (indice % 2 === 0) {
            alert(indice)
            console.log(indice);
        }
    }
}

function exercicio22SomarNumerosIntervalo() {
    let comeco = parseInt(prompt("Digite o número do começo"))
    let fim = parseInt(prompt("Digite o número final"))
    let soma = 0;
    for (let indice = comeco; indice <= fim; indice = indice + 1) {

        soma = soma + indice

    }
    console.log(soma);
}
function exercicio23ContarNumerosNegativos() {

    let numeroTotal = 0;
    for (indice = 0; indice < 6; indice = indice + 1) {
        let numero = parseInt(prompt("Digite um número"))
        if (numero < 0) {
            numeroTotal = numeroTotal + 1;
        }
    }
    console.log(" Quantidade de números negativos" + " " + numeroTotal);

}

function exercicio24CalcularMediaAlturas() {
    let somaAltura = 0;
    for (indice = 0; indice < 5; indice = indice + 1) {
        let altura = parseFloat(prompt("Digite sua altura"))
        somaAltura = somaAltura + altura

    }

    console.log(somaAltura);
}

function exercicio25ContarNotasAcimaSete() {

    let notasMaiores = 0;
    for (indice = 0; indice < 9; indice = indice + 1) {
        let notas = parseInt(prompt("Digite suas notas"))
        if (notas >= 7) {
            notasMaiores = notasMaiores + 1
            console.log("Notas maiores que 7: " + notasMaiores)
        }
    }
}

function exercicio26MaiorEMenorNumero() {
    let numeroMenor = 10000000000000000000000000000000000000000000000000000;
    let numeroMaior = 0;
    for (indice = 0; indice < 8; indice = indice + 1) {
        let numero = parseInt(prompt("Digite seu número"))

        if (numero > numeroMaior) {
            numeroMaior = numero
            console.log("O número maior é :" + numeroMaior);
        }

        if (numero < numeroMenor) {
            numeroMenor = numero
            console.log("Numero menor é :" + numeroMenor);

        }
        console.log("Número menor é :" + numeroMenor + "\n" + "Número maior é : " + numeroMaior);
    }
}

function exercicio27SomarIdadesMaioresDeIdade() {
    let maiorIdade = 0;
    for (indice = 0; indice < 5; indice = indice + 1) {
        let nome = prompt("Digite seu nome")
        let idade = parseInt(prompt("Digite sua idade"))

        if (idade >= 18) {
            maiorIdade = maiorIdade + idade
        }

    }
    console.log("Idades somadas das pessoas com mais de 18 anos: " + maiorIdade);

}

function exercicio28ContarHomensEMulheres() {
    let sexo = prompt("Digite seu sexo")
    for (indice = 0; indice < 7; indice = indice + 1) {
        let nome = prompt("Digite seu nome")

        let M = 0
        let F = 0
        if (sexo === M) {
            M + 1;
        }
        if (sexo === F) {

            F + 1;

        }
        console.log(nome + "\n" + sexo);
    }
}

    function exercicio30TabuadasCompletas() {

        // Laço para percorrer os números de 1 até 5 (cada tabuada)
        for (let numeroDaTabuada = 1; numeroDaTabuada <= 5; numeroDaTabuada++) {
    
            console.log("Tabuada do número " + numeroDaTabuada + ":");
    
            // Laço para fazer as multiplicações de 1 até 10
            for (let multiplicador = 1; multiplicador <= 10; multiplicador = multiplicador + 1) {
    
                let resultadoDaMultiplicacao = numeroDaTabuada * multiplicador;
    
                console.log(
                    numeroDaTabuada + " x " + multiplicador + " = " + resultadoDaMultiplicacao
                );
            }
    
            // Linha separadora entre as tabuadas
            console.log("=================================");
        }
    }








//PRECISO FAZER A QUESTÃO ACIMA, E A QUESTÃO DE TABUADA, PEDIR AJUDA PRO SAMUEL, E TAMBÉM PEDIR AJUDA PRA ENTENDER OS MÉTODOS STRING


