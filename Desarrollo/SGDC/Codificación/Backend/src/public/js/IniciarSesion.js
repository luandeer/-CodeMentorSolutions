document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  // Obtener los valores ingresados por el usuario
  let celular = document.getElementById("celular").value;
  let password = document.getElementById("password").value;

  // Enviar los datos del formulario al servidor
  let data = {
    celular: celular,
    password: password
  };

  // Realizar una solicitud AJAX al servidor para el inicio de sesión
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(function(response) {
    // Verificar el estado de la respuesta
    if (response.ok) {
      // Inicio de sesión exitoso
      alert("¡Inicio de sesión exitoso!");
      window.location.href = "MostrarPromociones.html"; 
    } else {
      // Credenciales inválidas
      alert("Credenciales inválidas. Por favor, verifique su celular y contraseña.");
    }
  })
  .catch(function(error) {
    // Manejar errores aquí
    console.error(error);
  });
});