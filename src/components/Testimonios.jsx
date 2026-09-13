import { useState } from 'react'

const nombres = [
    'Ana Gómez',
    'Carlos López',
    'María Pérez',
    'José Ramírez',
    'Lucía Torres'
]

const comentarios = [
    'El paseo en lancha y el atardecer fueron inolvidables, lo recomiendo mucho.',
    'Muy buen servicio, el sendero ecológico y las aves me encantaron.',
    'Una experiencia tranquila y llena de naturaleza, perfecta para desconectarse.',
    'El desayuno frente al lago fue espectacular. Sin duda volveré pronto.',
    'Excelente atención y todo salió tal como estaba planeado. ¡Cinco estrellas!'
]

function Testimonios() {
    const [indice, setIndice] = useState(function () {
        return Math.floor(Math.random() * nombres.length)
    })

    function verOtraOpinion() {
        let nuevoIndice = Math.floor(Math.random() * nombres.length)

        while (nuevoIndice === indice) {
            nuevoIndice = Math.floor(Math.random() * nombres.length)
        }

        setIndice(nuevoIndice)
    }

    return (
        <>
            <div id="testimonio">
                <p id="testimonio-texto">"{comentarios[indice]}"</p>
                <p id="testimonio-nombre">- {nombres[indice]}</p>
            </div>

            <button type="button" id="btn-otra-opinion" onClick={verOtraOpinion}>
                Ver otra opinión
            </button>
        </>
    )
}

export default Testimonios