const numeroAleatorio = gerarNumeroAleatorio()
const menorValor = 1
const maiorValor = 1000

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * 100);
}

console.log(numeroAleatorio)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor