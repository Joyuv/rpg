export default class LugaBase {

  constructor(nome, desc, opcoes) {
    if (this.constructor === LugarBase) {
      throw new Error("Classe abstrata não pode ser instanciada")
    }
    this.nome = nome
    this.desc = desc
    this.opcoes = opcoes
  }
}
