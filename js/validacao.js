function verificaChuteValido (chute) {
    const numero = +chute 

    if (numeroInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroDiferenteDoValor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numeroAleatorio}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }    
}   

function numeroInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroDiferenteDoValor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})

function gameOver(chute){
    if(chute === "game over") {
        document.body.innerHTML = `
        <h2>Comando "Game Over" executado!<h2>
        <h3>O jogo acabou!</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }
}
