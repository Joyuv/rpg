import Entidade from "./Entidade.js"
import { d20, d6 } from "./dados.js"

export default class Rato extends Entidade {

  constructor(nome, nivel, forca, destreza, resistencia) {
    super(nome, nivel, forca, destreza, resistencia);
  }

  ataqueUm(resis) {
    const tentativa = d20(1) + this.destreza
    if (tentativa > resis) {
      const dano = d6(Math.floor(this.nivel / 2) + Math.floor(this.forca / 2)) - 2
      return [dano, "O rato corre em sua direção e pula sobre seu braço mordendo-o com suas presas"]
    }
    else {
      return "O rato pula em sua direção mas você consegue desviar de seu ataque"
    }

  }
}
