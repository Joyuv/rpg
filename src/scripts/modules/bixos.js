import Bandido from "./Bandido.js"
import Lobo from "./Lobo.js"
import Rato from "./Rato.js"

const ratoFraco = new Rato("Ratinho", 1, 2, 4, 7)
const ratoMedio = new Rato("Ratazana", 2, 3, 5, 8)
const ratoForte = new Rato("Ratão", 4, 5, 3, 10)

const bandidoFraco = new Bandido("Bandindinho", 2, 5, 2, 7)
const bandidoMedio = new Bandido("Bandido", 4, 5, 4, 9)
const bandidoForte = new Bandido("Bandidão", 6, 7, 3, 11)

const auuFraco = new Lobo("Pitufino", 2, 5, 5, 6)
const auuMedio = new Lobo("Pitufo", 4, 7, 8, 9)
const auuForte = new Lobo("Papa Pitufo", 6, 8, 10, 11)

export {
    ratoFraco,
    ratoMedio,
    ratoForte,
    bandidoFraco,
    bandidoMedio,
    bandidoForte,
    auuFraco,
    auuMedio,
    auuForte
}
