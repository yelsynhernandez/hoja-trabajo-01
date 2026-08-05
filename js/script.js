const imagenesGaleria = document.querySelectorAll('.imagen-galeria');
const modal = document.getElementById('modal');
const modalImagen = document.getElementById('modal-imagen');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescripcion = document.getElementById('modal-descripcion');
const botonCerrarModal = document.getElementById('btn-cerrar-modal');

if (imagenesGaleria.length > 0) {
    imagenesGaleria.forEach(function (imagen) {
        imagen.addEventListener('click', function () {
            modalImagen.src = imagen.src;
            modalTitulo.textContent = imagen.dataset.titulo;
            modalDescripcion.textContent = imagen.dataset.descripcion;
            modal.classList.remove('oculto');
        });
    });

    // Botón para cerrar el modal
    botonCerrarModal.addEventListener('click', function () {
        modal.classList.add('oculto');
    });

    // Cerrar el modal al hacer clic fuera de la imagen
    modal.addEventListener('click', function (evento) {
        if (evento.target === modal) {
            modal.classList.add('oculto');
        }
    });
}

const botonCalcular = document.getElementById('btn-calcular');

if (botonCalcular) {
    botonCalcular.addEventListener('click', function () {
        const asistentes = parseInt(document.getElementById('asistentes').value) || 0;
        const paquete = parseInt(document.getElementById('paquete').value) || 0;

        let adicionales = 0;

        // Sumamos el valor de cada servicio adicional marcado
        const transporte = document.getElementById('transporte');
        const alimentacion = document.getElementById('alimentacion');
        const equipo = document.getElementById('equipo');

        if (transporte.checked) {
            adicionales += parseInt(transporte.value);
        }
        if (alimentacion.checked) {
            adicionales += parseInt(alimentacion.value);
        }
        if (equipo.checked) {
            adicionales += parseInt(equipo.value);
        }

        const total = asistentes * (paquete + adicionales);

        document.getElementById('resultado-cotizacion').textContent =
            'El precio total estimado para ' + asistentes +
            ' persona(s) es de Q' + total + '.';
    });
}

// ------------------------------------------------------------
// 3. FILTRO / BUSCADOR DE ACTIVIDADES
// Oculta o muestra las actividades según lo que se escribe.
// ------------------------------------------------------------
const buscador = document.getElementById('buscador');
const actividades = document.querySelectorAll('.actividad');

if (buscador) {
    buscador.addEventListener('input', function () {
        const texto = buscador.value.toLowerCase();

        actividades.forEach(function (actividad) {
            if (actividad.textContent.toLowerCase().includes(texto)) {
                actividad.classList.remove('oculto');
            } else {
                actividad.classList.add('oculto');
            }
        });
    });
}

// ------------------------------------------------------------
// 4. CONFIRMACIÓN INTERACTIVA DE RESERVACIÓN / CONTACTO
// Valida que ningún campo esté vacío y muestra un mensaje.
// ------------------------------------------------------------
const formularioReservacion = document.getElementById('formulario-reservacion');

if (formularioReservacion) {
    formularioReservacion.addEventListener('submit', function (evento) {
        // Evitamos que la página se recargue al enviar
        evento.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const personas = document.getElementById('personas').value.trim();
        const mensaje = document.getElementById('mensaje-confirmacion');

        if (nombre === '' || correo === '' || personas === '') {
            mensaje.textContent = 'Por favor completa todos los campos para enviar tu solicitud.';
            mensaje.className = 'error';
        } else {
            mensaje.textContent = '¡Gracias ' + nombre +
                ', tu solicitud para ' + personas + ' personas ha sido registrada!';
            mensaje.className = 'exito';
            formularioReservacion.reset();
        }
    });
}

// ------------------------------------------------------------
// 5. RESEÑAS / TESTIMONIOS ALEATORIOS
// Muestra una opinión al azar de nuestros visitantes.
// ------------------------------------------------------------
const nombres = [
    'Ana Gómez',
    'Carlos López',
    'María Pérez',
    'José Ramírez',
    'Lucía Torres'
];

const comentarios = [
    'El paseo en lancha y el atardecer fueron inolvidables, lo recomiendo mucho.',
    'Muy buen servicio, el sendero ecológico y las aves me encantaron.',
    'Una experiencia tranquila y llena de naturaleza, perfecta para desconectarse.',
    'El desayuno frente al lago fue espectacular. Sin duda volveré pronto.',
    'Excelente atención y todo salió tal como estaba planeado. ¡Cinco estrellas!'
];

const testimonioTexto = document.getElementById('testimonio-texto');
const botonOtraOpinion = document.getElementById('btn-otra-opinion');

function mostrarTestimonio() {
    const indice = Math.floor(Math.random() * nombres.length);
    testimonioTexto.textContent = '"' + comentarios[indice] + '"';
    document.getElementById('testimonio-nombre').textContent = '- ' + nombres[indice];
}

if (testimonioTexto) {
    // Mostramos una opinión al azar al cargar la página
    mostrarTestimonio();

    botonOtraOpinion.addEventListener('click', mostrarTestimonio);
}
