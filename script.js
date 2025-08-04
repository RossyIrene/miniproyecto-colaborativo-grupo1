// Array para simular almacenamiento tipo API
let mensajesEnviados = [];

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    const correoRegex = /^.*@.*\.com$/i;

    // Validar que el nombre tenga al menos 2 letras
    if (!nombre || nombre.length < 2) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre inválido',
            text: 'Por favor, ingresa un nombre válido (mínimo 2 letras).',
            confirmButtonColor: '#104492'
        });
        return;
    }

    // Validar que la primera letra del nombre sea mayúscula
    const primeraLetra = nombre.charAt(0);
    if (primeraLetra !== primeraLetra.toUpperCase()) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre mal escrito',
            text: 'La primera letra del nombre debe estar en mayúscula.',
            confirmButtonColor: '#104492'
        });
        return;
    }

    // Validar correo con reglas específicas
    if (!correoRegex.test(correo)) {
        Swal.fire({
            icon: 'error',
            title: 'Correo inválido',
            text: 'El correo debe contener "@" y terminar con ".com".',
            confirmButtonColor: '#104492'
        });
        return;
    }

    // Validar longitud del mensaje
    if (mensaje.length < 5) {
        Swal.fire({
            icon: 'error',
            title: 'Mensaje muy corto',
            text: 'Por favor, escribe un mensaje más detallado.',
            confirmButtonColor: '#104492'
        });
        return;
    }

    // Formatear nombre para mostrar en la alerta: Primera mayúscula
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    // Simulando una "API" guardando en un array
    const nuevoMensaje = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje,
        fecha: new Date().toLocaleString()
    };

    mensajesEnviados.push(nuevoMensaje);

    console.log("Mensajes enviados (simulación API):", mensajesEnviados);

    // Mensaje de éxito
    Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        html: `<strong>${nombre}</strong><br>Gracias por contactarte. ¡Te responderé pronto!`,
        confirmButtonColor: '#089fe0'
    });

    this.reset();
});
