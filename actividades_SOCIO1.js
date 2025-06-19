function mostrarEmocion(emocion) {
    const mensajes = {
      'alegre': "¡Qué bueno que te sientas feliz!",
      'triste': "Está bien sentirse triste a veces. ¡Habla con alguien de confianza,podria ayudar!",
      'enojado': "Respira profundo, contar hasta 10 puede ayudar.",
      'nervioso':"Todos nos sentimos nervioso, ¡respira profundo y exala lento!"
    };
    document.getElementById("resultado").textContent = mensajes[emocion];
  }
