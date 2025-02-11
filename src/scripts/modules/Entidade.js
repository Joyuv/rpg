module.exports = class Entidade{

    constructor(nome, nivel, forca, destreza, resistencia) {
        if (this.constructor === Entidade){
            throw new Error("Classe abstrata não pode ser instanciada")
        }
        this.nome = nome;
        this.nivel = nivel;
        this.forca = forca;
        this.destreza = destreza;
        this.resistencia = resistencia;

    }
}