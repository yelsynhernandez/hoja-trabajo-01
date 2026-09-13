import { useState } from 'react'

function FormularioReservacion() {
    const [nombre, setNombre] = useState('')
    const [personas, setPersonas] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [esError, setEsError] = useState(false)

    function manejarEnvio(evento) {
        evento.preventDefault()

        const numeroPersonas = Number(personas)

        if (nombre.trim() === '' || personas === '' || numeroPersonas <= 0) {
            setMensaje('Por favor completa los campos y asegúrate de que el número de personas sea mayor a 0.')
            setEsError(true)
            return
        }

        setMensaje('¡Gracias ' + nombre.trim() + ', tu solicitud para ' + personas + ' personas ha sido registrada!')
        setEsError(false)
        setNombre('')
        setPersonas('')
    }

    return (
        <>
            <form id="formulario-reservacion" onSubmit={manejarEnvio}>
                <label htmlFor="nombre">Nombre completo:</label>
                <br />
                <input
                    type="text"
                    id="nombre"
                    placeholder="Escribe tu nombre"
                    value={nombre}
                    onChange={function (evento) { setNombre(evento.target.value) }}
                />
                <br />

                <label htmlFor="personas">Número de personas:</label>
                <br />
                <input
                    type="number"
                    id="personas"
                    min="1"
                    placeholder="1"
                    value={personas}
                    onChange={function (evento) { setPersonas(evento.target.value) }}
                />
                <br />

                <button type="submit">Enviar solicitud</button>
            </form>

            {mensaje && <p className={esError ? 'error' : 'exito'}>{mensaje}</p>}
        </>
    )
}

export default FormularioReservacion