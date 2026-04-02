function exemploMensagem() {
    alert("Hello world minha primeira mensagem 'Francisco' ")
}
function exemploString() {

    //Criando a variável
    let nome = "Elias";
    let sobrenome = "Otto com dois T";
    //Alterar o valor da variável sobrenome
    sobrenome = "Otto";
    //apresentando a variável
    alert(nome)
    alert(sobrenome)
}

function exemploStringConcatenacao(){

    let nomeProduto= "Sabão em pó";
    let marcaProduto= "Omo";

    //Concatenação: juntar uma string(texto) com alguma outra coisa

    //"Sabão em pó" + " " => "Sabão em pó"
    //"Sabão em pó" + "Omo" => "Sabão em pó Omo"

    let texto= nomeProduto +" "+ marcaProduto;

    alert(texto);
}

function exemploNumeroInteiro(){
let produto= "PC Gamer da Xuxa";
let quantidadePcs = 16;

let quantidadeMemoriaPorPc= 8;

let totalGb = quantidadePcs * quantidadeMemoriaPorPc;
// "/n" serve para quebrar a linha
alert(
"Produto: " + produto +
"\nQuantidade de pcs: " + quantidadePcs +
"\nMemória Ram por pc: " + quantidadeMemoriaPorPc + "GB" +
"\nTotal de GB dos PCs: " + totalGb + "GB");
}
// Tipos de Variáveis
// String => texto, posso número dentro porém n serve para calcular
//int => números inteiros => 2
// float => números reais => 2.30
// boolean=> Lógico => true or false => verdadeiro ou falso

function exemploFloat() {
 let endereco = "Rua XV de Novembro"; //string
let largura = 12.20;
let comprimento =45.50;
let metroQuadrado = largura * comprimento;

alert("m² do terreno: " + metroQuadrado);
}

function exemploBoolean(){
//quando entra na empresa
let tenhoFeriasVencidas = false;

//completei 1 ano de empresa

tenhoFeriasVencidas = true;

alert("Férias vencidas? " + tenhoFeriasVencidas);
}