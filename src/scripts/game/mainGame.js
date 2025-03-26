const personagem = JSON.parse(localStorage.getItem('personagem'))
console.log(personagem)

function mudarHp() {
  if (personagem.vidaAtual != Number(document.getElementById("hpinfo").innerHTML)) {
    document.getElementById("hpinfo").innerHTML = personagem.vidaAtual
    const porcentagem = 100 * (personagem.vidaAtual / personagem.vida)
    document.getElementById("vida").style.width = porcentagem.toString() + "%"
  }
}
function atualizarAtributos() {
  const atributos = document.getElementsByClassName("atributo")
  if (Number(atributos[0].innerHTML) != personagem.forca) {
    atributos[0].innerHTML = personagem.forca
  }
  if (Number(atributos[1].innerHTML) != personagem.resistencia) {
    atributos[1].innerHTML = personagem.resistencia
  }
  if (Number(atributos[2].innerHTML) != personagem.inteligencia) {
    atributos[2].innerHTML = personagem.inteligencia
  }
  if (Number(atributos[3].innerHTML) != personagem.agilidade) {
    atributos[3].innerHTML = personagem.agilidade
  }
}
mudarHp()
setInterval(mudarHp, 300)
atualizarAtributos()
setInterval(atualizarAtributos, 10000)


if (lugar === 'inicial') {
  const historia = document.getElementById('historia').innerText = "Você acorda desnorteado em uma sela de prisão "
}
