import { useState } from 'react'
import lago1 from '../../imagenes/lago1.jpg'
import lago2 from '../../imagenes/lago2.jpg'
import lago3 from '../../imagenes/lago3.jpg'
import lago4 from '../../imagenes/lago4.jpg'
import lago5 from '../../imagenes/lago5.jpg'
import lago6 from '../../imagenes/lago6.jpg'

const imagenes = [
    {
        src: lago1,
        alt: 'Vista panorámica del Lago de Güija',
        titulo: 'Paseos en el lago',
        descripcion: 'Disfruta de un viaje tranquilo y aprecia las maravillas del lago.'
    },
    {
        src: lago2,
        alt: 'Aguas cristalinas del lago',
        titulo: 'Paseos grupales',
        descripcion: 'Si no quieres viajar solo puedes reunirte con tus amigos en un paseo y tomar fotografías fantásticas.'
    },
    {
        src: lago3,
        alt: 'Sendero ecológico',
        titulo: 'Sendero al pie del lago',
        descripcion: 'Si temes estar en el agua siempre puedes escoger dar un recorrido al pie del lago y conocer el entorno en cada paso.'
    },
    {
        src: lago4,
        alt: 'Lanchas en el lago',
        titulo: '¿Prefieres más emoción?',
        descripcion: 'Puedes optar por visitar el centro turístico cercano con toboganes y piscinas.'
    },
    {
        src: lago5,
        alt: 'Flora tropical',
        titulo: '¿Quieres una toma épica?',
        descripcion: 'Puedes traer tu equipo fotográfico para capturar momentos únicos.'
    },
    {
        src: lago6,
        alt: 'Atardecer en el lago',
        titulo: 'Disfruta de los atardeceres',
        descripcion: 'Al caer la tarde puedes disfrutar de una excelente vista mientras el sol baja por el horizonte.'
    }
]

function GaleriaImagenes() {
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null)

    function abrirModal(imagen) {
        setImagenSeleccionada(imagen)
    }

    function cerrarModal() {
        setImagenSeleccionada(null)
    }

    return (
        <>
            <div className="galeria-grid">
                {imagenes.map(function (imagen) {
                    return (
                        <img
                            key={imagen.src}
                            src={imagen.src}
                            alt={imagen.alt}
                            width="400"
                            height="300"
                            className="imagen-galeria"
                            onClick={function () { abrirModal(imagen) }}
                        />
                    )
                })}
            </div>

            {imagenSeleccionada && (
                <div id="modal" onClick={function (evento) { if (evento.target.id === 'modal') cerrarModal() }}>
                    <div id="modal-contenido">
                        <img id="modal-imagen" src={imagenSeleccionada.src} alt={imagenSeleccionada.alt} />
                        <h3 id="modal-titulo">{imagenSeleccionada.titulo}</h3>
                        <p id="modal-descripcion">{imagenSeleccionada.descripcion}</p>
                        <button type="button" id="btn-cerrar-modal" onClick={cerrarModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default GaleriaImagenes