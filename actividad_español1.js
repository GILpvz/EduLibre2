document.querySelectorAll('.opcion').forEach(opcion => { opcion.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', e.target.textContent); }); });

document.querySelectorAll('.dropzone').forEach(zone => { zone.addEventListener('dragover', e => { e.preventDefault(); zone.style.borderColor = '#2ecc71'; });

zone.addEventListener('dragleave', e => { zone.style.borderColor = '#aaa'; });

zone.addEventListener('drop', e => { e.preventDefault(); const letra = e.dataTransfer.getData('text/plain'); zone.textContent = letra; const correcto = zone.dataset.correcto; const resultado = document.getElementById('resultado'); if (letra === correcto) { resultado.textContent = '¡Muy bien! Completaste la palabra.'; resultado.style.color = 'green'; } else { resultado.textContent = 'Ups, intenta otra vez.'; resultado.style.color = 'red'; } }); });

function reiniciar() { document.querySelectorAll('.dropzone').forEach(zone => { zone.textContent = ''; zone.style.borderColor = '#aaa'; }); document.getElementById('resultado').textContent = ''; }