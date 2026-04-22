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

for(indice = 0; indice < 5; indice = indice + 1) {

let numero = parseInt(prompt("Digite um número"))

numeroTotal = +"Quantidade de numeros acima de 0" + numeroTotal + numero
if(numero >=0) {
    alert("O número é positivo")
}
console.log(numero + " Quantidade de números acima de 0" + numeroTotal);

}

}