import Bandido from "./Bandido"
import Lobo from "./Lobo"
import Rato from "./Rato"

const ratoFraco = Rato("Ratinho", 1, 2, 4, 7)
const ratoMedio = Rato("Ratazana", 2, 3, 5, 8)
const ratoForte = Rato("Ratão", 4, 5, 3, 10)

const bandidoFraco = Bandido("Bandindinho", 2, 5, 2, 7)
const bandidoMedio = Bandido("Bandido", 4, 5, 4, 9)
const bandidoForte = Bandido("Bandidão", 6, 7, 3, 11)

const auuFraco = Lobo("Pitufino", 2, 5, 5, 6)
const auuMedio = Lobo("Pitufo", 4, 7, 8, 9)
const auuForte = Lobo("Papa Pitufo", 6, 8, 10, 11)

module.exports = {
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