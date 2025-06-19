function verificar(opcion) {
    const mensaje = document.getElementById('mensaje');
    if (opcion === 'independencia') {
      mensaje.textContent = '¡Correcto! La Independencia fue antes que la Revolución.';
      mensaje.style.color = 'green';
    } else {
      mensaje.textContent = 'Incorrecto. La Independencia ocurrió en 1810.';
      mensaje.style.color = 'red';
    }
  }
  function reiniciar() {
    document.getElementById('mensaje').textContent = '';
  }
