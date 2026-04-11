function exercicio01() {
    let nome = prompt("Digite seu nome");
    let idade = prompt("Digite sua idade");

    if ((idade >= 0) && (idade <= 17)) {
        alert("Menor de idade"
        )
    }
    else if (idade >= 18) {
        alert("Maior de idade")
    }
}


function exercicio02() {
    let numero = prompt("Digite seu número");

    if ((numero >= 10)) {
        alert("Seu número é maior que 10");
    }
    else if (numero <= 9) {
        alert("Seu número é menor que 10")
    }
}

function exercicio03() {
    let numero = prompt("Digite seu número");

    if ((numero == 0)) {
        alert("Seu número é igual a 0")
    }

    else if (numero != 0) {
        alert("Seu número é diferente de 0");
    }
}

function exercicio04() {
    let numero = prompt("Digite um número")

    if ((numero == 8001)) {
        alert("Seu número é igual a 8001")
    }
    else if ((numero != 8001)) {
        alert("Seu número é diferente de 8001")
    }
}

function exercicio05() {
    let numero1 = parseInt(prompt("Digite seu número"));
    let numero2 = parseInt(prompt("Digite outro número"));
    let resultado = numero1 + numero2;



    if ((resultado <= 0)) {
        alert("Seu número é negativo");
    }

    else if (resultado >= 0) {
        alert("Seu número é positivo");
    }
}

function exercicio06() {
    let numero1 = parseFloat(prompt("Digite seu número"));
    let numero2 = parseFloat(prompt("Digite seu número"));
    let numero3 = parseFloat(prompt("Digite seu número"));
    let total = numero1 + numero2 + numero3;
    let valorMaximo = total;

    if ((total <= 100)) {
        alert("Você consegue comprar, está dentro do seu limite");
    }

    else if ((total > 100)) {
        alert("Você não pode comprar, o valor passou o seu limite");
    }
}


function exercicio07() {
    let idade = prompt("Digite sua idade");

    if (idade <= 15) {
        alert("Não pode votar");
    }
    else if ((idade == 16) || (idade == 17)) {
        alert("Voto opcional");
    }
    else if (idade <= 18) {
        alert("Voto obrigatório");
    }
}

function exercicio08() {
    let numero = prompt("Digite seu número");

    if ((numero >= 1)) {
        alert("Seu número é positivo");
    }
    else if ((numero <= -1)) {
        alert("Seu número é negativo");
    }

    else if (numero == 0) {
        alert("Seu número é zero");
    }

}

function exercicio09() {
    let numero1 = parseInt(prompt("Digite um número"));
    let numero2 = parseInt(prompt("Digite outro número"));

    if (numero1 > numero2) {
        alert("O número 1 é maior que o número 2");
    }
    else if (numero1 < numero2) {
        alert("O Número 2 é maior que o número 1");
    }
    else {
        alert("Os números são iguais");
    }
}

function exercicio10() {
    let numero = parseInt(prompt("Digite um número"))

    if ((numero >= 10) && (numero <= 20)) {
        alert("Seu número está entre 10 e 20");
    }
    else {
        alert("Seu número não está entre 10 e 20");

    }

}

function exercicio11() {
    let numero1 = parseInt(prompt("Digite seu número"));
    let numero2 = parseInt(prompt("Digite seu número"));
    let numero3 = parseInt(prompt("Digite seu número"));

    if ((numero1 >= 1) && (numero2 >= 1)(numero3 >= 1)) {
        alert("Seu número é positivo");
    }
    else {
        alert("Seus números são negativos");
    }
}

function exercicio12() {
    let usuario = prompt("Digite seu login");
    let senha = (prompt("Digite sua senha"));

    if ((usuario === "admin") && (senha === "1234")) {
        alert("Login correto");
    }

    else {
        alert("Login incorreto");
    }
}




function exercicio13() {

    let numero = prompt("Digite seu numero")


    if (numero % 2 === 0) {
        alert("É par");
    } else {
        alert("É impar");
    }
}

function exercicio14() {
    let salario = prompt("Digite seu salário")

    if ((salario <= 1999)) {
        alert("Salário baixo")
    }

    else if ((salario >= 2000) && (salario <= 5000)) {
        alert("Salario médio");
    }

    else {
        alert("Salário alto");
    }
}

function exercicio15() {
    let temperatura = prompt("Digite seu número");

    if (temperatura <= 14) {
        alert("Frio");
    }

    else if ((temperatura >= 15) && (temperatura <= 25)) {
        alert("Agradável");
    }
    else {
        alert("Quente");
    }
}

function exercicio16() {
    let numero1 = prompt("Digite seu número");
    let numero2 = prompt("Digite seu número");

    if ((numero1 === numero2)) {
        alert("Esses números são múltiplos");
    }
    else {
        alert("Esses números não são múltiplos");
    }
}

function exercicio17() {
    nota1 = parseFloat(prompt("Digite a nota1"));
    nota2 = parseFloat(prompt("Digite a nota2"));
    nota3 = parseFloat(prompt("Digite a nota3"));
    media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        alert("Aprovado");
    }

    else if ((media >= 5) && (media <= 6.9)) {
        alert("Recuperação");
    }
    else {
        alert("Reprovado");
    }
}

function exercicio18() {
    let idade = prompt("Digite sua idade");
    let renda = prompt("Digite sua renda");

    if ((idade >= 18) && (renda >= 2000)) {

        alert("Crédito aprovado")
    }
    else {
        alert("Não aprovado")
    }
}

function exercicio19() {
    let horario = parseInt(prompt("Digite o horário"));

    if ((horario <= 11) && (horario >= 0)) {
        alert("Bom dia");
    }
    else if ((horario >= 12) && (horario <= 17)) {
        alert("Boa tarde");
    }

    else {
        alert("Boa noite");
    }
}


function exercicio20() {
let numero1 = prompt("Digite um número");
let numero2 = prompt("Digite um número");
let operadorMatematico


}
