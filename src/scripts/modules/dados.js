function d20(quant) {
    const resultadoFinal = 0
    for (i = 0; 1 < quant; i++) {
        resultadoFinal += Math.floor(Math.random() * 20)
    }
    return resultadoFinal
}

function d6(quant) {
    const resultadoFinal = 0
    for (i = 0; 1 < quant; i++) {
        resultadoFinal += Math.floor(Math.random() * 20)
    }
    return resultadoFinal
}

module.exports = {
    d20,
    d6
}
