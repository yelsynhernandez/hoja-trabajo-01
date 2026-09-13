import { useState } from 'react'

const actividadesItinerario = [
    'Viaje en autobús desde la terminal cercana a Tica Bus (3 horas)',
    'Desayuno en el hotel cercano al lago (1 hora)',
    'Ruta de sendero ecológico a lo largo del lago (1 hora y media)',
    'Espacio libre para fotografía (30 minutos)',
    'Paseo en lancha por el lago (30 minutos)'
]

const otrasActividades = [
    'Observación de aves y fauna silvestre',
    'Pesca deportiva en el lago',
    'Natación en las aguas cristalinas',
    'Visita a comunidades locales y artesanías',
    'Camping a la orilla del lago',
    'Paseos en cayuco por el lago',
    'Rutas de ciclismo de montaña',
    'Fotografía de paisajes naturales',
    'Recreación y juegos en áreas verdes',
    'Visita a cascadas cercanas'
]

function FiltroActividades() {
    const [busqueda, setBusqueda] = useState('')

    const texto = busqueda.toLowerCase().trim()

    const filtradasItinerario = actividadesItinerario.filter(function (actividad) {
        return actividad.toLowerCase().includes(texto)
    })

    const filtradasOtras = otrasActividades.filter(function (actividad) {
        return actividad.toLowerCase().includes(texto)
    })

    return (
        <>
            <input
                type="text"
                id="buscador"
                placeholder="Buscar una actividad..."
                value={busqueda}
                onChange={function (evento) { setBusqueda(evento.target.value) }}
            />

            <h3>Actividades Incluidas en el Itinerario</h3>
            <ul>
                {filtradasItinerario.map(function (actividad, indice) {
                    return <li key={indice}>{actividad}</li>
                })}
            </ul>
            {filtradasItinerario.length === 0 && <p className="sin-resultados">Sin resultados en el itinerario.</p>}

            <h3>Otras Actividades Disponibles en el Lugar</h3>
            <ul>
                {filtradasOtras.map(function (actividad, indice) {
                    return <li key={indice}>{actividad}</li>
                })}
            </ul>
            {filtradasOtras.length === 0 && <p className="sin-resultados">Sin resultados en otras actividades.</p>}
        </>
    )
}

export default FiltroActividades