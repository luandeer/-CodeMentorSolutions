const botonRegistrar = document.getElementById("registrationForm");

botonRegistrar.addEventListener("submit", (event) =>
{
  event.preventDefault(); // Evita que el formulario se envíe por defecto a "/"

  // verificar si las contraseñas coinciden
  const password = document.getElementById("password").value;
  const rep_password = document.getElementById("rep-password").value;

  if(password !== rep_password){
    // Si las contraseñas no coinciden se manda un aviso y usamos return para terminar
    // el proceso
    alert("Las contraseñas no coinciden, por favor intente otra vez.");
    return;
  }

  // Si las contraseñas coinciden sigue el flujo normal
  // Obtener los valores ingresados por el usuario
  const nombres = document.getElementById("name").value;
  const apellidos = document.getElementById("apellidos").value;
  const celular = document.getElementById("celular").value;
  const direccion = document.getElementById("direccion").value;

  // Enviar los datos del formulario al servidor
  const data = { nombres, apellidos, celular, direccion, password };

  // Ejemplo de solicitud fetch:
  fetch("/registrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then( response => console.log(response) )
  .catch( error => console.error(error) );

});