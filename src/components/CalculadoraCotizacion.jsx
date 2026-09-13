import { useState } from 'react'

function CalculadoraCotizacion() {
    const [asistentes, setAsistentes] = useState(1)
    const [paquete, setPaquete] = useState(300)
    const [transporte, setTransporte] = useState(false)
    const [alimentacion, setAlimentacion] = useState(false)
    const [equipo, setEquipo] = useState(false)

    let adicionales = 0
    if (transporte) {
        adicionales += 100
    }
    if (alimentacion) {
        adicionales += 100
    }
    if (equipo) {
        adicionales += 50
    }

    const cantidad = Number(asistentes)
    const total = cantidad > 0 ? cantidad * (paquete + adicionales) : 0

    return (
        <>
            <form>
                <label htmlFor="asistentes">Número de asistentes:</label>
                <br />
                <input
                    type="number"
                    id="asistentes"
                    min="1"
                    value={asistentes}
                    onChange={function (evento) { setAsistentes(evento.target.value) }}
                />
                <br />

                <label htmlFor="paquete">Tipo de paquete:</label>
                <br />
                <select
                    id="paquete"
                    value={paquete}
                    onChange={function (evento) { setPaquete(Number(evento.target.value)) }}
                >
                    <option value={300}>Paquete Básico - Q300 por persona</option>
                    <option value={450}>Paquete Premium - Q450 por persona</option>
                </select>
                <br />

                <label>Servicios adicionales:</label>
                <br />
                <input
                    type="checkbox"
                    id="transporte"
                    checked={transporte}
                    onChange={function (evento) { setTransporte(evento.target.checked) }}
                /> Transporte incluido (+Q100 por persona)
                <br />
                <input
                    type="checkbox"
                    id="alimentacion"
                    checked={alimentacion}
                    onChange={function (evento) { setAlimentacion(evento.target.checked) }}
                /> Alimentación (+Q100 por persona)
                <br />
                <input
                    type="checkbox"
                    id="equipo"
                    checked={equipo}
                    onChange={function (evento) { setEquipo(evento.target.checked) }}
                /> Equipo de excursión (+Q50 por persona)
                <br />
            </form>

            <p id="resultado-cotizacion">
                El precio total estimado para {cantidad} persona(s) es de Q{total}.
            </p>
        </>
    )
}

export default CalculadoraCotizacion