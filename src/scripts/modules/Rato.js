import Entidade from "Entidade"

class Rato extends Entidade {

  constructor(nome, nivel, forca, destreza, resistencia) {
    super(nome, nivel, forca, destreza, resistencia);
  }

  ataqueUm(resis) {
    const tentativa = d20(1) + this.destreza
    if (tentativa > resis) {
      const dano = d6(math.floor(this.nivel / 2) + this.forca)
      return [dano, "O lobo morde seu braço e arranca um pouco de pele"]
    }
    else {
      return "O lobo pula em sua direção mas você consegue desviar de seu ataque"
    }

  }
}
