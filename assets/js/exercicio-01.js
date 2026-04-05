function exercicio01() {
    let nome = "Neymar";
    alert (nome);
    let nascimento= 1992;
    alert (nascimento);
    let anoAtual = 2026;
    let idade= anoAtual - nascimento;
    alert(idade + " " + "anos");

    let altura = 1.75;
    alert(altura + " " + "cm");

    let peso= 68;
    alert(peso + "kg");

    let IMC = peso / altura *2;
    alert (IMC);

    let categoria = "Jogador de Futebol";
    alert (categoria);

    let QuantidadedeJob = 8;
    let ValorporJob= 1700000;
    let salario=  ValorporJob * QuantidadedeJob;
    alert (salario.toFixed(2));
}

function exercicio02() {
    let nome = "Samuelzinho Bauler";
    alert(nome);
    let nota1 = 7.5;
    alert(nota1);
    let nota2 = 9;
    alert(nota2);
    let nota3 = 8.5;
    alert(nota3);
    let nota4 = 10;
    alert(nota4);

    let media= (nota1 + nota2 + nota3 + nota4) / 4;
    alert(media);
}

function exercicio03(){
    let nome = "notebook";
    alert(nome);

    let preco = 6000;
    alert(preco + "R$");

    let quantidade= 5;
    alert(quantidade);

    let ValorTotal = preco * quantidade;
    alert(ValorTotal + "R$");

    let desconto= 10;
    alert (desconto + "%");

    let calculardesconto = preco - (preco * desconto)/100;
    alert(calculardesconto + "R$");
}   

function exercicio04 () {

    let nome = "MERCEDES-BENZ A 200"
    alert (nome)

    let anoCarro = 2025;
    alert (anoCarro)

    let velocidademaxima = 250
    alert (velocidademaxima + "km")

    let tempoviagem = 4;
    alert(tempoviagem + "h")

    let distancia = velocidademaxima * tempoviagem;
    alert(distancia + "km") 
}


function exercicio05 () {

    let nome = "Blumenau";
    alert(nome);

    let populacao = 385000;
    alert (populacao + " " + "mil habitantes");

    let areacidade = 518;
    alert(areacidade + "km");

    let densidadedemografica = populacao / areacidade;
    alert(densidadedemografica);
}

function exercicio06() {

    let nome = "harry potter e a pedra filosofal";
    alert(nome);

    let duracao = "2h.32m";
    alert(duracao);

    let classificacao = "Livre para todos os públicos";
    alert(classificacao)

    let vezesAssistidas= "6 vezes";
    alert(vezesAssistidas);
}

function exercicio07() {

    let nome = "Lucas";
    alert(nome);

    let salarioBase = 2000;
    alert (salarioBase + "R$")

    let horasExtras =  4;
    alert (horasExtras + "h");

    let valorporhoraextra = 9.09;
    alert(valorporhoraextra + "R$")

    let valortotal = valorporhoraextra * horasExtras;
    alert(valortotal + "R$")

    let salariofinal = salarioBase + valortotal
    alert(salariofinal + "R$")

}
