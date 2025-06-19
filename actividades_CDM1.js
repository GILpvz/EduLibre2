function verificar(respuesta) {
    const mensaje = document.getElementById('mensaje');
    if (respuesta === 'ojo') {
      mensaje.textContent = '¡Correcto! Es un ojo.';
      mensaje.style.color = 'green';
    } else {
      mensaje.textContent = 'Incorrecto. Intenta de nuevo.';
      mensaje.style.color = 'red';
    }
  }
  function reiniciar() {
    document.getElementById('mensaje').textContent = '';
  }