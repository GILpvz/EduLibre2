const movimientos = [
    "¡Da 3 saltos!",
    "¡Toca tus pies 5 veces!",
    "¡Gira en tu lugar!",
    "¡Camina como un robot!",
    "¡Estira los brazos al cielo!"
  ];

  function mostrarMovimiento() {
    const random = Math.floor(Math.random() * movimientos.length);
    document.getElementById("instruccion").textContent = movimientos[random];
  }