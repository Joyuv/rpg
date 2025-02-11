const Entidade = require("./Entidade.js")
const d = require("./dados.js")
module.exports = class Bandido extends Entidade{
    constructor(nome, nivel, forca, destreza, resistencia){
        super(nome, nivel, forca, destreza, resistencia);
    }

    ataqueUm(resis){
        const tentativa = (d.d20() + this.destreza);
        console.log(tentativa)
        if (tentativa > resis){
            const dano = d.d6() + this.forca;
            return(dano)
        }

    }
}