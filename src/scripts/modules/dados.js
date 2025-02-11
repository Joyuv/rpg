function d20(){
    return Math.floor(Math.random() * 20)
}

function d6(){
    return Math.floor(Math.random() * 6)
}

module.exports = {
    d20,
    d6
}