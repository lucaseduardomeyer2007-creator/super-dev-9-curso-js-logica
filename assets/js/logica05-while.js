function exemplo01() {
    debugger
    // Mostrar uma mensagem 4 vezes
    let indice = 0; //Indice é um contador

    while (indice < 4) {
        console.log("Oie");
        indice = indice + 1;
    }
}


function exemploSolicitarNumeros() {
    //MODO ANTIGO, sem while
    //let numero1 = parseInt(Prompt("Digite o número: "));
    //let numero2 = parseInt(Prompt("Digite o número: "));
    //let numero3 = parseInt(Prompt("Digite o número: "));

    debugger;
    //Solicitar 3 números
    let indice = 0;

    // while: utilizamos para repetir o código
    // while: (indice < 3)

    while (indice <= 2) {
        let numero = parseInt(prompt("Digite o número:"));
        indice = indice + 1;
    }

    alert("Muito obrigado")
}

function solicitarDadosPaciente() {
    //Solicitar os dados de 3 pcientes, nome e idade
    let indice = 0;

    while (indice < 3) {
        let nome = prompt("Digite seu nome").trim();
        let idade = parseInt(prompt("Digite sua idade"));

        let anoNascimento = 2026 - idade;
        alert(nome + "Nasceu em " + anoNascimento);

        //Incrementar
        indice = indice + 1;
    }
}

function contagemRegressiva() {
    let indice = 10;

    while (indice >= 0) {
        alert(indice)
        indice = indice = 1;

    }
}

function calcularPrecoJogos() {
    let indice = 0;
    debugger

    let total = 0;

    //Solicitar preço de 3 jogos

    while (indice <= 2) {
        let nome = prompt("Digite o nome do Jogp;")
        let preco = parseFloat(prompt("Digite o preço"));

        //Somando: Total recebe ele mesmo, o seja, o valor inicial da variável total
        // mais o preço do jogo
        //titak = 0 + preço;
        total = total + preco;
        indice = indice + 1;

        alert("Total dos Jogos: " + total);

    }
}

function descobrirQuantidade() {
    //Solicitar nome, idade de 3 pessoas e apresentar a quantidade de menores de idade
    let indice = 0;
    let quantidadeMenoresIdade = 0;

    while (indice < 3) {
        let nome = prompt("Digite seu nome");
        let idade = parseInt(prompt("Digite a idade"));

        if (idade <= 17) {
            // incrementar a variável quantidadeMenoresIdade em 1

            quantidadeMenoresIdade = quantidadeMenoresIdade + 1;
        }
        indice = indice + 1;
    }

    alert("Quantidade de pessoas menores de 18 anos: " + quantidadeMenoresIdade);
}

function descobrirMaiorAltura() {
    //Descobrir maior altura
    let indice = 0;
    let maiorAltura = 0;

    while (indice < 4) {
        let altura = parseFloat(prompt("Digite sua altura"));



        if (altura > maiorAltura) {
            maiorAltura = altura;
        }

        indice = indice + 1;

        alert("Maior altura: " + maiorAltura);

    }
}

function descobrirMenorVitorias() {
    let indice = 0;
    let menorQuantidadeVitorias = 999999999999;



    while (indice < 3) {

        let personagem = prompt("Digite o nick");
        let quantidadeVitorias = parseInt(prompt("Digite a quantidade de vitórias"));

        if (quantidadeVitorias < menorQuantidadeVitorias) {
            menorQuantidadeVitorias = quantidadeVitorias;
        }
        indice = indice + 1;
    }

    alert("Menor quantidade de vitórias: " + menorQuantidadeVitorias);
}


function descobrirColabadorComBonificacaoSalario() {
    let indice = 0;
    let maiorBonificacao = 0;
    let colaboradorMaiorBonificacao = "";

    while (indice < 3) {
        let colaborador = prompt("Digite o nome da colaborador");
        let bonificacao = parseFloat(prompt("Digite o valor da bonificação"));


        if (bonificacao > maiorBonificacao) {
            maiorBonificacao = bonificacao;

            colaboradorMaiorBonificacao = colaborador;
        }

        indice = indice + 1;
    }
    alert(colaboradorMaiorBonificacao + " tem a maior bonificação: " + maiorBonificacao);
}


function descobrirMenorNome() {
    let indice = 0;
    let menorNome = "ajsjdjasjdjasjdajsdjasjdajsjdajsdjasjd";

    let quantidadeDesejada = parseInt(prompt("Digite a quantidade desejada para cadastrar"));

    while (indice < quantidadeDesejada) {
        let nome = prompt("Digite o nome").trim();

        if (nome.length < menorNome.length) {
            menorNome = nome;
        }

        indice = indice + 1;
    }

    alert("Menor nome: " + menorNome + "\nQuantidade de caracateres: " + menorNome.length);
}


function repetirEnquantoUsuarioDesejaContinuar() {
    let desejaContinuar = "";
    
    alert("Bem vindo ao sistema de cadastro de fila de atendimento do SOS");

    while (desejaContinuar != "não") {
    let nomePaciente = prompt("Digite o nome do paciente");

    desejaContinuar = prompt("Deseja continuar? [sim/não]").toLowerCase()
    }
}


function repetirEnquantoUsuarioDesejaContinuarComConfirm() {
    let desejaContinuar = true;
    let quantidadePacientesCadastrados = 0;

    alert("Bem vindo ao sistema de cadastro de fila de atendimento de SOS")

    while (desejaContinuar != false) {

        let nomePaciente = prompt("Digite o nome do Paciente");

        quantidadePacientesCadastrados = quantidadePacientesCadastrados + 1;

        desejaContinuar =confirm("Deseja Continuar?");
    }

alert("Quantidade de pacientes que foram cadastrados: " + quantidadePacientesCadastrados)
}


function exemploValidacao() {
    let indice = 0;

    while(indice < 3) {
        let nome = prompt("Digite o nome ").trim();
        // o nome é valido quando 2 caracteres e no maximo 20
        while ((nome.length < 2 ) || (nome.length > 20)) {
            nome = prompt("Nome inváilido, deve conter no minino 2 caracteres e no maximo 20 caracteres.\nDigite o nome").trim();
        }

        let idade = parseInt(prompt("digite a idade"));
        // idade minima de 16 para ir no show e maximo 100
        while ((idade < 16 ) || ( idade > 100)){
            idade = parseInt(prompt(
                "idade invalida, deve ser entre 16 e 100 anos"
            ))
        }
        indice = indice + 1;
    }
}


