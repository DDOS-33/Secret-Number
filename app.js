let listaDeNumerosSorteados = [];
let numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
};

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Numero secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
};

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    (chute == numeroSecreto)
    ? (exibirTextoNaTela('h1','Acertou!'),
    exibirTextoNaTela('p', `Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}!`),
    document.getElementById('reiniciar').removeAttribute('disabled'))

    : (chute > numeroSecreto
        ? exibirTextoNaTela('p','O numero secreto é menor!')
        : exibirTextoNaTela('p','O numero secreto é maior!'));
        
    tentativas++;
    limparCampo();

};


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

};

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* 10 + 1);    
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    };

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}; 