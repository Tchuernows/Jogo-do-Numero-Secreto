let ListaDeNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate : 1.2});
}

function exibirMensagemDeEntrada() {
    exibirTextoNaTela("h1", "Jogo do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
    }
    exibirMensagemDeEntrada();

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `O número secreto foi descoberto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela("p",mensagemTentativa );
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativa++
        limparCampo();
    }
}

function gerarNumeroAleatorio () {
 let numeroEscolhido = parseInt(Math.random()* numerolimite + 1); 
 let quantidadeDeElementos = ListaDeNumerosSorteados.length;

 if (quantidadeDeElementos == numerolimite) {
    ListaDeNumerosSorteados = [];
 } 
 if (ListaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
 } else {
    ListaDeNumerosSorteados.push(numeroEscolhido);
    console.log(ListaDeNumerosSorteados);
    return numeroEscolhido
 }
}
function limparCampo() {
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemDeEntrada();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}   
