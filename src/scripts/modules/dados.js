function d20(quant = 1){
    let quantTotal = 0
    for (let i = 0; i < quant; i++){
        quantTotal += Math.floor(Math.random() * 20)
    }
    return quantTotal
}

function d6(quant = 1){
    let quantTotal = 0
    for (let i = 0; i < quant; i++){
        quantTotal += Math.floor(Math.random() * 6)
    }
    return quantTotal
}

module.exports = {
    d20,
    d6
}