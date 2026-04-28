function exemploToLowerCase() {
    let nome = "John Doe";
    let nomeMinusculo = nome.toLowerCase();
    console.log("nome minúsculo: " + nomeMinusculo);
}

function exemploToUpperCase() {
    let nome = "John Doe";
    let nomeMaiusculo = nome.toUpperCase();
    console.log("Nome maiúsculo: " + nomeMaiusculo);
}

function exemploTamanho() {
    let nome = "John Doe";
    let quantidadeCaracteres = nome.length;

    console.log("Texto '" + nome + "'");
    console.log("Quantidade de caracteres: " + quantidadeCaracteres);
}

function exemploSubstituicao() {
    let texto = "Abacate, Uva, Maca, Pera";
    let textoCorrigido = texto.replace("Maca, Maçã");

    console.log("Texto: " + texto);
    console.log("Texto Corrigido: " + textoCorrigido);
}

function exemploSubstituicaoNaPropriaVariavel() {
    let texto = prompt("Digite o preço"); // => "450.39"
    // "R$ 450,39" => "450.39"
    texto = texto.replace(",", "."); // "R$ 450,39" => "R$ 450.39"
    texto = texto.replace("R$", "");
    texto = texto.replace(" ", "");

    console.log("Texto sanitizado:" + texto);
}

function removerEspacosDoFim() {
    let texto = "    o Batman Vive a noite, de dia ele dorme     "

    console.log("O texto original: '" + texto + "'");

    texto = texto.trimEnd();

    console.log(" O texto sem espaços no fim: '" + texto + "'");
}

function removerEspacosDoComeco() {
    let texto = "    o Batman Vive a noite, de dia ele dorme     "

    console.log("O texto original: '" + texto + "'");

    texto = texto.trimStart();

    console.log(" O texto sem espaços no começo: '" + texto + "'");
}

function removerEspacosDoComecoFinal() {
    let texto = "    o Batman Vive a noite, de dia ele dorme     "

    console.log("O texto original: '" + texto + "'");

    texto = texto.trim();

    console.log(" O texto sem espaços no começo: '" + texto + "'");
}

function agregarCaracteresFim() {
    let nome = "Paulo C";

    console.log("Nome do Cartão: " + nome.padEnd(20, "*"));
}

function agregarCaracteresComeco() {
    let finalCartaoCredito = "7292";

    console.log("Cartão de crédito: " + finalCartaoCredito.padStart(12, "*"));
}

function verificarSeComecaCom() {
    let texto = prompt("Digite um nome");

    //Verificar se começa com a letra P
    if (texto.toUpperCase().startsWith("p") === true) {
        alert("Começa com a letra 'P', pois tem a senha secreta");
    }
    else {
        alert("Não pode entrar na festa");
    }
}

function verificarSeContem() {
    let nomeEpisodio = prompt("Digite o nome do episodio");

    //Verificar se é a primeira temporada "S01" exemplo "Lost S01E04"
    if (nomeEpisodio.includes("S01") === true) {
        alert("Primeira temporada");
    }
    else if (nomeEpisodio.includes("S02") === true)
        alert("Segunda temporada");

    else {
        alert("Ao infinito e além");
    }
}

function verificarSeTerminaCom() {
    //Verificar se termina com 'chocolate'

    let bolo = prompt("Digite o nome do bolo");

    if (bolo.endsWith("chocolate") === true) {

        alert(" Boa escolha");
    }
}

function pegarPosicao() {
    let fruta = "Abacate";
    let primeiroCaracter = fruta[0]

    console.log("Fruta: " + fruta + "\nPrimeira posição: " + primeiroCaracter);
}

function quebrarString() {
    //String              01234
    let horaMinuto = "20:30";

    let partes = horaMinuto.split(":");
    //
    // split => ["20", "30"]

    console.log(partes);

    let hora = partes[0];
    let minuto = partes[1];

    console.log("Hora: " + hora);
    console.log("Minuto: " + minuto);
}

function exemploPegarPartedaString() {
    let nomeCompleto = "Ruan Costa";
    // Ruan Costa
    // R => 0 (Começa aqui)
    // U => 1
    // A => 2
    // N => 3
    // => 4( Para nesta posição)
    // C => 5(Começa aqui)
    // O => 6
    // S => 7 
    // T => 8 
    // A => 9

    let nome = nomeCompleto.slice(0, 4); // Ruan
    let sobrenome = nomeCompleto.slice(5, 10);
}

function pegarIndiceDoCaracter() {
    let texto = "Abacate Uva Pera";

    let ultimoIndiceDoEspaco = texto.lastIndexOf(" ");

    let ultimaPalavra = texto.slice(ultimoIndiceDoEspaco + 1, texto.length);

    console.log(texto);
    console.log(ultimaPalavra);
}

function descobrirIndiceDoCaracter() {
    //                         0123456789.....
    let numeroCartao = "3010 2039 2019 2030";

    let indicePrimeiroEspaço = numeroCartao.indexOf(" ");

    let primeiraParteCartao = numeroCartao.slice(0, indicePrimeiroEspaço);

    console.log("Cartão: " + numeroCartao);
    console.log("Primeira parte do Cartão: " + primeiraParteCartao);
}


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
