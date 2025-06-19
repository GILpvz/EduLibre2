function verificar(respuesta) {
    const mensaje = document.getElementById('mensaje');
    if (respuesta === 'recoger') {
      mensaje.textContent = '¡Muy bien! Eso es lo correcto.';
      mensaje.style.color = 'green';
    } else {
      mensaje.textContent = 'Esa no es la mejor opción.';
      mensaje.style.color = 'red';
    }
  }
  function reiniciar() {
    document.getElementById('mensaje').textContent = '';
  }