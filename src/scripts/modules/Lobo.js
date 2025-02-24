import { d20, d6 } from "./dados"

const Entidade = require("./Entidade")

export default class Lobo extends Entidade {

  constructor(nome, forca, nivel, destreza, resistencia) {
    super(nome, forca, nivel, destreza, resistencia)
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
