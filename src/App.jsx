import GaleriaImagenes from './components/GaleriaImagenes.jsx'
import CalculadoraCotizacion from './components/CalculadoraCotizacion.jsx'
import FiltroActividades from './components/FiltroActividades.jsx'
import FormularioReservacion from './components/FormularioReservacion.jsx'
import Testimonios from './components/Testimonios.jsx'

function App() {
    return (
        <div>
            <h1>Escápate al Lago de Güija: Donde la Historia Navega Contigo</h1>

            <h2>Descripción del Lugar</h2>
            <p>
                ¿Imaginas despertar con el suave vaivén del agua y el canto de las garzas? Te invitamos a una aventura única en el Lago de Güija, un tesoro escondido en la frontera entre Guatemala y El Salvador, donde la naturaleza y el misterio maya se funden en un solo horizonte.
            </p>
            <h3>Amanecer con sabor a tradición</h3>
            <p>
                Tu experiencia comienza en la comodidad de un hotel a la orilla del lago, como el turicentro San Juan La Isla en Asunción Mita. Disfruta de un desayuno caliente frente al espejo de agua, deleitándote con un tradicional caldo de gallina o una mojarra frita recién sacada del lago, mientras el sol ilumina los volcanes circundantes.
            </p>

            <h2>Índice</h2>
            <ul>
                <li><a href="#galeria">Galería de Imágenes</a></li>
                <li><a href="#cotizacion">Calculadora de Cotización</a></li>
                <li><a href="#actividades">Actividades</a></li>
                <li><a href="#itinerarios">Itinerarios</a></li>
                <li><a href="#reservacion">Reservación</a></li>
                <li><a href="#testimonios">Opiniones de visitantes</a></li>
            </ul>

            <section id="galeria">
                <h2>Galería de Imágenes</h2>
                <p><em>Haz clic en cualquier imagen para verla en tamaño grande.</em></p>
                <GaleriaImagenes />
            </section>

            <section id="cotizacion">
                <h2>Calculadora de Cotización de la Excursión</h2>
                <p><em>Completa los datos y observa el precio estimado en tiempo real.</em></p>
                <CalculadoraCotizacion />
            </section>

            <section id="actividades">
                <h2>Actividades en el Lago de Güija</h2>
                <p><em>Escribe en el recuadro para filtrar las actividades en tiempo real.</em></p>
                <FiltroActividades />
            </section>

            <section id="itinerarios">
                <h2>Itinerarios de la Excursión</h2>
                <h3>Horario General de Actividades</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Actividad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>7:00 AM</td><td>Salida desde la terminal de autobuses (cerca de Tica Bus)</td></tr>
                        <tr><td>10:00 AM</td><td>Llegada al Lago de Güija (3 horas de viaje)</td></tr>
                        <tr><td>10:00 AM - 11:00 AM</td><td>Desayuno en el hotel cercano al lago</td></tr>
                        <tr><td>11:00 AM - 12:30 PM</td><td>Ruta de sendero a lo largo del lago (1 hora y media)</td></tr>
                        <tr><td>12:30 PM - 1:00 PM</td><td>Espacio para fotos (30 minutos)</td></tr>
                        <tr><td>1:00 PM - 1:30 PM</td><td>Paseo en lancha por el lago (30 minutos)</td></tr>
                        <tr><td>1:30 PM - 5:30 PM</td><td>Retorno a Guatemala - Terminal de autobuses (4 horas de viaje)</td></tr>
                    </tbody>
                </table>
            </section>

            <section id="reservacion">
                <h2>Reserva tu lugar en la Excursión</h2>
                <p><em>Completa el formulario y presiona el botón para enviar tu solicitud.</em></p>
                <FormularioReservacion />
            </section>

            <section id="testimonios">
                <h2>Opiniones de nuestros visitantes</h2>
                <Testimonios />
            </section>

            <footer>
                <p><strong>Página web desarrollada por:</strong> Yelsyn Adrid Hernández Crúz</p>
            </footer>
        </div>
    )
}

export default App