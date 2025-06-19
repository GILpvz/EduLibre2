/* js/indexeddb.js (gestión de usuarios offline) */ let db; const request = indexedDB.open("EducaLibreDB", 1); request.onupgradeneeded = function(event) { db = event.target.result; const userStore = db.createObjectStore("users", { keyPath: "username" }); }; request.onsuccess = function(event) { db = event.target.result; };

function saveUser(username, password) { const tx = db.transaction("users", "readwrite"); const store = tx.objectStore("users"); store.add({ username, password }); }

function validateUser(username, password, callback) { const tx = db.transaction("users", "readonly"); const store = tx.objectStore("users"); const req = store.get(username); req.onsuccess = () => { if (req.result && req.result.password === password) { callback(true); } else { callback(false); } }; }

/* js/register.js */ document.getElementById("registerForm").addEventListener("submit", function(e) { e.preventDefault(); const username = document.getElementById("username").value; const password = document.getElementById("password").value; saveUser(username, password); alert("Usuario registrado correctamente"); window.location.href = "login.html"; });

/* js/login.js */ document.getElementById("loginForm").addEventListener("submit", function(e) { e.preventDefault(); const username = document.getElementById("username").value; const password = document.getElementById("password").value; validateUser(username, password, function(isValid) { if (isValid) { alert("Inicio de sesión exitoso"); window.location.href = "dashboard.html"; } else { alert("Credenciales incorrectas"); } }); });