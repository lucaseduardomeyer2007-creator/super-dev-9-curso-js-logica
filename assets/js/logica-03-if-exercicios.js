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
    let num1 = parseInt(prompt("digite um numero: "));
    let num2 = parseInt(prompt("digite outro numero: "));

    let soma = num1 + num2;
    let menos = num1 - num2;
    let multiplica = num1 * num2;
    let dividir = num1 / num2;

    let operacao = prompt("Oq você deseja?" + "\nSoma:" + "\nSubtração" + "\nMultiplicação:" + "\nDivisão:")

    if (operacao === "Soma") {
        alert(soma)
    } else if (operacao === "Subtração") {
        alert(menos)
    } else if (operacao === "Multiplicação") {
        alert(multiplica)
    } else if (operacao === "Divisão") {
        alert(dividir)
    } else {
        alert("operação invalida")
    }
}

function exercicio21() {
    let x = parseInt(prompt("Digite um numero:"))
    let y = parseInt(prompt("Digite outro numero:"))
    let z = parseInt(prompt("Digite outro numero:"))

    let menor = 0
    let meio = 0
    let maior = 0

    if (x <= y && x <= z) {
        menor = x
    } else if (y <= x && y <= z) {
        menor = y
    } else {
        menor = z
    }

    if (x >= y && x >= z) {
        maior = x
    } else if (y >= x && y >= z) {
        maior = y
    } else {
        maior = z
    }

    meio = x + y + z - menor - maior

    alert(menor + ", " + meio + ", " + maior)
}
function exercicio22() {
    let num1 = parseInt(prompt("Digite um numero:"))
    let num2 = parseInt(prompt("Digite outro numero:"))
    let num3 = parseInt(prompt("Digite outro numero:"))

    let maior = 0

    if (num1 >= num2 && num1 >= num3) {
        maior = num1
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2
    } else {
        maior = num3
    }
    alert("O maior numero é: " + maior)
}
function exercicio23() {
    let num1 = parseInt(prompt("Digite um numero:"))
    let num2 = parseInt(prompt("Digite outro numero:"))
    let num3 = parseInt(prompt("Digite outro numero:"))

    let menor = 0

    if (num1 <= num2 && num1 <= num3) {
        menor = num1
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2
    } else {
        menor = num3
    }
    alert("O menor numero é: " + menor)
}
function exercicio24() {
    let num1 = parseInt(prompt("Digite um numero:"))
    let num2 = parseInt(prompt("Digite outro numero:"))
    let num3 = parseInt(prompt("Digite outro numero:"))

    if (num1 <= num2 && num2 <= num3) {
        alert("Os números estão em ordem crescente: " + num1 + ", " + num2 + ", " + num3)
    } else if (num1 >= num2 && num2 >= num3) {
        alert("Os números estão em ordem decrescente: " + num1 + ", " + num2 + ", " + num3)
    } else {
        alert("Os números estão sem ordem definida: " + num1 + ", " + num2 + ", " + num3)
    }
}

function exercicio25() {
    let idade = parseInt(prompt("Digite a sua idade:"))

    if (idade < 0) {
        alert("Idade inválida!")
    } else if (idade <= 12) {
        alert("Você é uma criança.")
    } else if (idade <= 17) {
        alert("Você é um adolescente.")
    } else if (idade <= 59) {
        alert("Você é um adulto.")
    } else {
        alert("Você é um idoso.")
    }
}
function exercicio26() {
    let valor = parseFloat(prompt("Digite o valor da compra: "))
    let pagamento = prompt("Forma de pagamento: " + "\nCartão" + "\nPix")

    if (pagamento === "Cartão") {
        let acresmimo = 0.15
        let valoracresimo = valor * acresmimo
        let valorFinal = valor + valoracresimo
        alert("Forma de pagamento: Cartão\nAcréscimo de 15%" + "\nValor final: R$ " + valorFinal.toFixed(2))
    } else if (pagamento === "Pix") {
        let desconto = 0.15;
        let valordesconto = valor * desconto
        let valorFinal2 = valor - valordesconto
        alert("Forma de pagamento: Pix\nDesconto de 15%: R$ " + "\nValor final: R$ " + valorFinal2.toFixed(2))
    } else {
        alert("Forma de pagamento inválida!")
    }
}
function exercicio27() {
    let num1 = parseInt(prompt("Digite um numero:"))
    let num2 = parseInt(prompt("Digite outro numero:"))

    if (num1 > 0 && num2 > 0) {
        alert("Os dois são positivos")
    } else if (num1 < 0 && num2 < 0) {
        alert("Os dois negativos")
    } else if (num1 < 0 || num2 < 0) {
        alert("Um número é negativo e outro e positivo")
    }
}
function exercicio28() {
    let nota1 = parseInt(prompt("Digite a 1 nota"))
    let nota2 = parseInt(prompt("Digite a 2 nota"))
    let nota3 = parseInt(prompt("Digite a 3 nota"))

    let faltas = parseInt(prompt("Quantas faltas você tem?"))

    let media = (nota1 + nota2 + nota3) / 3;
    let percentualFaltas = 0.75 * 200;

    if (media < 6 || faltas > percentualFaltas) {
        alert("Reprovado")
    } else {
        alert("Aprovado")
    }
}

function exercicio29() {
    let num = parseInt(prompt("Digite um numero:"))

    if (num % 2 == 0 && num % 3 == 0) {
        alert("ele é divisivel por ambos")
    } else if (num % 2 == 0) {
        alert(" é divisivel por dois")
    } else if (num % 3 == 0) {
        alert(" é divisivel por três")
    } else {
        alert("não é por nenhum")
    }
}

function exercicio30() {
    let ano = parseInt(prompt("Digite um ano:"))

    if (ano % 4 == 0 && ano % 100 != 0) {
        alert(ano + " é bissexto!")
    } else if (ano % 400 == 0) {
        alert(ano + " é bissexto!")
    } else {
        alert(ano + " não é bissexto.")
    }
}
// 31 não entendi

function exercicio32() {
    let num = parseInt(prompt("Digite um numero:"));

    if (num > 50 && num < 100) {
        alert("Ele está dentro");
    } else {
        alert("não");
    }
}
function exercicio33() {
    let num1 = parseInt(prompt("Digite um numero:"));
    let num2 = parseInt(prompt("Digite outro numero:"));

    let diferenca = num1 - num2

    if (num < 0) {
        alert("Negativo")
    } else if (num > 0) {
        alert("Positivo")
    } else {
        alert("Zero")
    }
}
function exercicio34() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))
    let num3 = parseFloat(prompt("Digite o terceiro numero:"))

    let media = (num1 + num2 + num3) / 3
    let referencia = 7

    if (media >= referencia) {
        alert("Média: " + media.toFixed(2) + "\nA média está acima ou igual à referência (" + referencia + ")")
    } else {
        alert("Média: " + media.toFixed(2) + "\nA média está abaixo da referência (" + referencia + ")")
    }
}
function exercicio35() {
    let num = parseInt(prompt("Digite um numero:"));

    if (num < 9 && num > -9) {
        alert("Um digito")
    } else if (num >= -99 && num <= 99) {
        alert(" Dois digitos")
    } else {
        alert("zero")
    }
}

function exercicio36() {
    let num = parseInt(prompt("Digite um numero:"))

    if (num == 5 || num == 10 || num == 15 || num == 20) {
        alert(num + " pertence ao conjunto {5, 10, 15, 20}!")
    } else {
        alert(num + " não pertence ao conjunto {5, 10, 15, 20}.")
    }
}
function exercicio37() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))

    if (num1 == num2) {
        alert("Os números são iguais!")
    } else if (num1 > num2) {
        alert("Os números são diferentes!\nO maior é: " + num1)
    } else {
        alert("Os números são diferentes!\nO maior é: " + num2)
    }
}
function exercicio38() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))
    let num3 = parseFloat(prompt("Digite o terceiro numero:"))

    if (num1 < 0 || num2 < 0 || num3 < 0) {
        alert("Pelo menos um dos números é negativo!")
    } else {
        alert("Nenhum dos números é negativo.")
    }
}

function exercicio39() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))
    let num3 = parseFloat(prompt("Digite o terceiro numero:"))

    if (num1 > 0 || num2 > 0 || num3 > 0) {
        alert("Pelo menos um dos números é Positivo!")
    } else {
        alert("Nenhum dos números é Positivo.")
    }
}
function exercicio40() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))

    if (num1 % num2 == 0) {
        alert("É multiplo")
    } else {
        alert("Não é")
    }
}
function exercicio41() {
    let num = parseInt(prompt("Digite um numero:"));

    let intervano1 = [1, 50]
    let intervano2 = [51, 100]

    if (num >= intervano1[0] && num <= intervano1[1]) {
        alert(num + " está no intervalo 1: [1 a 50]")
    } else if (num >= intervano2[0] && num <= intervano2[1]) {
        alert(num + " está no intervalo 2: [100 a 200]")
    } else {
        alert(num + " não está em nenhum dos intervalos.")
    }
}
function exercicio42() {
    let num = parseInt(prompt("Digite um numero:"));

    let intervalo = [1, 100]

    if (num >= intervalo[0] && num <= intervalo[1]) {
        alert(num + " está dentro do intervalo [1 a 100]!")
    } else {
        alert(num + " está fora do intervalo [1 a 100].")
    }
}
function exercicio43() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))
    let num3 = parseFloat(prompt("Digite o terceiro numero:"))

    if (num1 == num2 || num1 == num3 || num2 == num1 || num2 == num3 || num3 == num1 || num3 == num2) {
        alert("Tem iguais ai")
    } else {
        alert("são todos diferentes")
    }

}
function exercicio44() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"))
    let num2 = parseFloat(prompt("Digite o segundo numero:"))
    let num3 = parseFloat(prompt("Digite o terceiro numero:"))

    if (num1 == num2 || num1 == num3 || num2 == num1 || num2 == num3 || num3 == num1 || num3 == num2) {
        alert("tem São iguais, congratulations")
    } else {
        alert("tem diferentes ai cumprade")
    }

}
function exercicio45() {
    let valor = parseFloat(prompt("Digite o valor da sua compra: "))
    let minino = 500
    let desconto = 0.15

    if (valor >= minino) {
        valordesconto = desconto * valor
        valordesconto - valor
        alert("Você ganhou um desconto de R$ " + valorDesconto.toFixed(2))
        alert("Valor final da compra: R$ " + valorFinal.toFixed(2))
    } else {
        alert("Sem desconto. Valor da compra: R$ " + valor.toFixed(2))
    }
}
function exercicio46() {
    let idade = parseInt(prompt("Digite sua idade: "))

    if (idade >= 18) {
        alert("Acesso permitido!")
    } else {
        alert("Acesso negado! Você precisa ter 18 anos ou mais.")
    }
}
function exercicio47() {
    let numero = parseInt(prompt("Digite um número: "))

    if (numero % 10 === 0) {
        alert("O número é divisível por 10!")
    } else if (numero % 5 === 0) {
        alert("O número é divisível por 5!")
    } else {
        alert("O número não é divisível por 5 nem por 10.")
    }
}
function exercicio48() {
    let num1 = parseInt(prompt("Digite um número: "));
    let num2 = parseInt(prompt("Digite outro número: "));

    let intervalo1 = [1, 50]

    if (num1 < intervalo1[0] && num2 < intervalo1[1]) {
        alert("Eles estão")
    } else {
        alert("Não estão")
    }
}


function exercicio49() {
    let num1 = parseFloat(prompt("Digite o primeiro número: "))
    let num2 = parseFloat(prompt("Digite o segundo número: "))
    let num3 = parseFloat(prompt("Digite o terceiro número: "))

    if (num1 + num2 > num3) {
        alert("A soma de " + num1 + " e " + num2 + " é maior que " + num3)
    } else if (num1 + num3 > num2) {
        alert("A soma de " + num1 + " e " + num3 + " é maior que " + num2)
    } else if (num2 + num3 > num1) {
        alert("A soma de " + num2 + " e " + num3 + " é maior que " + num1)
    } else {
        alert("Nenhuma combinação de dois números é maior que o terceiro.")
    }
    // da pra melhorar PELAMOR
}
function exercicio50() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero > 0 && numero % 2 === 0) {
        alert(numero + " é POSITIVO e PAR.");
    } else {
        alert(numero + " NÃO atende às duas condições.");
    }
}

// console.log(`${numero} é POSITIVO e PAR.`);



function contarLetrasNome() {
    let nome = prompt("Digite um nome");
    let quantidadeCaracteres = nome.length
    console.log("quantidade de caracteres: " + quantidadeCaracteres);
}

function converterParaMaiusculas() {
    let frase = prompt("Digite uma frase");
    let fraseMaiuscula = frase.toUpperCase();
    console.log("Frase maiúscula: " + fraseMaiuscula);
}

function converterParaMinusculas() {
    let frase = prompt("Digite uma frase");
    let fraseMinuscula = frase.toLowerCase();

    console.log("Frase minúscula: " + fraseMinuscula);
}

function mostrarPrimeiraLetra() {
    let texto = prompt("Digite uma palavra");
    let textoLetra = texto[0]

    console.log("Primeira letra: " + textoLetra);
}

function mostrarUltimaLetra() {
    let palavra = prompt("Digite uma palavra");
    let ultimaLetra = palavra.length

    console.log("Última letra: " + ultimaLetra);
}

function verificarPalavraNaFrase() {
    let frase = prompt("Digite uma frase");
    let frasePalavra = "estudar";

    if (frase.includes(frasePalavra) === true)
        alert("contém a palavra estudar")

    else {
        alert("Não contém a palavra estudar")
    }
}

function substituirCorNaFrase() {
    let frase = prompt("Digite sua frase");
    texto = frase.replace("azul", "vermelho");

    console.log("Frase Corrigida :" + texto);
}

function trocarEstacao() {
    let frase = "Eu gosto de verão";
    texto = frase.replace("verão", "inverno");

    console.log("Frase: " + texto);
}

function mostrarQuatroPrimeirosCaracteres() {
    let palavra = prompt("Digite uma palavra");
    let resultado = palavra.slice(0, 4);

    console.log(resultado);
}

function separarNomeCompleto() {
    let nomeCompleto = prompt("Digite seu nome completo: ");

    let partes = nomeCompleto.trim().split(" ");

    let nome = partes[0];
    let sobreNome = partes[1];
    let sobreNome2 = partes[2];

    console.log(nome + "\n" + sobreNome + " \n" + sobreNome2);
}

function removerEspacosExtras() {
    let texto = "   JavaScript   "
    textoCorrigido = texto.trim();

    console.log(textoCorrigido);
}

function repetirPalavraTresVezes() {
    let palavra = prompt("Digite uma palavra");
    let palavraRepetida = palavra.repeat(3);

    console.log(palavraRepetida);
}

/*function quebrarString() {
    //String              01234
    let horaMinuto = "20:30";

    let partes = horaMinuto.split(":");
    //
    // split => ["20", "30"]

    console.log(partes);

    let hora = partes[0];
    let minuto = partes[1];

    console.log("Hora: " + hora);
    console.log("Minuto: " + minuto);*/





function encontrarPosicaoPalavra() {
    let frase = "Eu estudo JavaScript todos os dias"
    let palavra = frase.split(" ")
    let palavrafinal = palavra.slice()
    //PRECISO DE AJUDA, NÃO SOUBE FAZER
    console.log(frase);

    console.log(palavra);

}

function verificarInicioEFim() {
    let palavra = prompt("Digite uma palavra");

    if (palavra.startsWith("a"))
        alert("A palavra começa com a letra A");


    else if (palavra.endsWith("o") === true)
        alert("A palavra termina com a letra O")
}

function trocarDominioEmail() {
    let email = prompt("Digite seu e-mail");
    let final = email.replace("@gmail.com", "@hotmail.com")


    console.log("Seu email alterado: " + final);
}


/*
Ex. 1 Criar uma função exercicio01SolicitarDadosMedico, criar um while para solicitar os dados de 5 médicos.
Solicitar o nome do médico e seu CRM

No final de todos os médicos apresentar mensagem "Obrigado por utilizar nosso sistema Hospitalar".

*/

function exercicio01SolicitarDadosMedico() {

    let indice = 0;


    while (indice < 5) {

        let nome = prompt("Digite seu nome");
        alert("Seu nome é: " + nome)
        let crm = prompt("Digite seu CRM");
        alert("Seu CRM é: " + crm)

        indice = indice + 1;
    }
    alert("Obrigado por utilizar nosso sistema Hospitalar")
}


function exercicio02SolicitarDadosPaciente() {
    let indice = 0;
    let quantidadePacientes = parseInt(prompt("Digite a quantidade de pacientes"))
    while (indice < quantidadePacientes) {
        let nome = prompt("Digite seu nome");
        alert(nome)
        let idade = prompt("Digite sua idade");
        alert(idade)

        indice = indice + 1;
    }
    alert("Quantidade de pacientes cadastrados " + quantidadePacientes)
}

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

    alert("A Soma total das idades é de " + somaIdade);
}

function exercicio04CalcularMediaIdades() {
    let indice = 0;
    let somaIdade = 0;
    
    while(indice < 5) {
        
        let idade = parseInt(prompt("Digite sua idade"));
        somaIdade = somaIdade + idade
        
        indice = indice + 1
    }
    
    let media = somaIdade / 5;
    alert("A média das idades é: " + media)
}

function exercicio05ContarMaioresIdade() {



    
}