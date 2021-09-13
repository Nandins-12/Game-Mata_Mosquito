var altura
var largura
var vidas = 1 
var tempo = 15
var criaMosquitoTempo = 1500

//propriedade .search recupera o valor do nivel de dificuldade do endereço, pegando somente o que está depois do ponto de interrogação 
var nivel = window.location.search 
//método replace está trocando o ponto de interrogação encontrado na string por uma string vazia.
nivel = nivel.replace('?', '')

if (nivel == 'normal') {

    criaMosquitoTempo = 1500
} else if (nivel == 'dificil') {

    criaMosquitoTempo = 1000
} else if (nivel == 'extremo') {

    criaMosquitoTempo = 750
}

function updateHW () {

    altura = window.innerHeight
    largura = window.innerWidth
}

updateHW()

var cronometro = setInterval(function () {

    tempo -= 1

    if (tempo > 0) {
        
        //A propriedade .innerHTML adiciona um valor a tag da qual é recuperada através do getElementById
        document.getElementById('cronometro').innerHTML = tempo
    } else {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }


}, 1000)

function posicaoRandomica () {

    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas <= 3) {

            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

            vidas++            
        } else {
            
            //redirecionar para a página de game over
            window.location.href = 'fim_de_jogo.html'
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar elemento html
    var mosquito = document.createElement('img')
    //adicionar atributos através do .
    mosquito.src = 'imagens/mosca.png'
    mosquito.onclick = function () {
        //o this faz referencia ao próprio elemento html que executa a função
        this.remove()
    }
    //estilização
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.id = 'mosquito'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    //adicionar ao body da página
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio () {

    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    } 
    
}

function ladoAleatorio() {

    var lado = Math.floor(Math.random() * 2)

    switch (lado) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}