const Bandido = require("./modules/Bandido.js")
const bixo1 = new Bandido("Bollon", 1, 3, 4, 2)

const ataque = bixo1.ataqueDois(5)
const dano = ataque[0]
const menAtq = ataque[1]

const ataque2 = bixo1.ataqueUm(5)
const dano2 = ataque2[0]
const menAtq2 = ataque2[1]

console.log(menAtq2, " e sofreu", dano2, " de dano")
console.log(menAtq, " e sofreu ", dano, " de dano")