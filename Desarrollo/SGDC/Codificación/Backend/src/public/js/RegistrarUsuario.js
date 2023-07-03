const botonRegistrar = document.getElementById("registrationForm");

botonRegistrar.addEventListener("submit", (event) =>
{
  event.preventDefault(); // Evita que el formulario se envíe por defecto a "/"

  // verificar si las contraseñas coinciden
  const passwrd = document.getElementById("password").value;
  const rep_password = document.getElementById("rep-password").value;

  if(passwrd !== rep_password){
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


  const resultadoValidacionNombre = validarNombre(nombres);
  const resultadoValidacionCelular = validarCelular(celular);
  const resultadoValidacionDireccion = validarDireccion(direccion);
  const resultadoValidacionContrasenya = validarContrasenya(passwrd);

  if (!resultadoValidacionNombre) {
    console.log("El nombre no es válido");
    return
  }
  if (!resultadoValidacionCelular) {
    console.log("El número de celular no es válido");
    return
  }
  if (!resultadoValidacionDireccion) {
    console.log("La dirección no es válida");
    return
  }
  if (!resultadoValidacionContrasenya) {
    console.log("La contraseña no es válida");
    return
  }

  // Enviar los datos del formulario al servidor
  const data = { nombres, apellidos, celular, direccion, passwrd };

  // Ejemplo de solicitud fetch:
  fetch("/RegistrarUsuario.html", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then( response => {
    if (response.ok)
    window.location.href = "index.html";
  })
  .catch( error => console.error(error) );

});

function validarCelular(celular) {
  const celularRegex = /^\d{9}$/;
  return celularRegex.test(celular);
}
function validarNombre(name) {
  const nombreRegex = /^[a-zA-Z\s]+$/;
  return nombreRegex.test(name);
}
function validarDireccion(direccion) {
  const direccionRegex = /^[a-zA-Z0-9\s\-.,#áéíóúÁÉÍÓÚñÑ]+$/;
  return direccionRegex.test(direccion);
}
function validarContrasenya(password) {
  const contraseñaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;
  return contraseñaRegex.test(password);
}