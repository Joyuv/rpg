const bixo = require("./modules/bixos.js")

function randomEncounter(nivel) {
  const escolha = Math.floor(Math.random() * 60) + (10 * nivel)
  bandidoEnc(escolha)
}

function bandidoEnc(tipo) {

  if (tipo <= 30) {
    console.log("Um bandindinho bloqueia seu caminho", bixo.bandidoFraco)
    return ["Um bandindinho bloqueia seu caminho", bixo.bandidoFraco] // após a vírgula, bandido
  }
  else if (tipo <= 65) {
    console.log("Um bandido bloquia seu caminho", bixo.bandidoMedio)
    return ["Um bandido bloqueia seu caminho", bixo.bandidoMedio]
  }
  else {
    console.log("Um bandido de 2 metros de altura bloqueia seu caminho", bixo.bandidoForte)
    return ["Um bandido de 2 metros de altura bloqueia seu caminho", bixo.bandidoForte]
  }

}

const encontros13 = {

}

randomEncounter(1)
randomEncounter(2)
randomEncounter(3)
