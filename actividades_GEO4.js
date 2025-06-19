function verificar(opcion) {
    const mensaje = document.getElementById('mensaje');
    if (opcion === 'campo') {
      mensaje.textContent = '¡Correcto! Es un área rural.';
      mensaje.style.color = 'green';
    } else {
      mensaje.textContent = 'No es correcto. Esa imagen representa el campo.';
      mensaje.style.color = 'red';
    }
  }
  function reiniciar() {
    document.getElementById('mensaje').textContent = '';
  }