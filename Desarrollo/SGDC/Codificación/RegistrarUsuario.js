document.getElementById("registrationForm").addEventListener("submit", function(event)
{
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores ingresados por el usuario
    const name = document.getElementById("name").value;
    const apellidos = document.getElementById("apellidos").value;
    const direccion = document.getElementById("direccion").value;
    const celular = document.getElementById("celular").value;
    const password = document.getElementById("password").value;
    const rep_password = document.getElementById("rep-password").value;

    // Aquí puedes realizar validaciones adicionales si es necesario
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
    // Validación de la contraseña (mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número)
    function validarContraseña(password) {
      const contraseñaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return contraseñaRegex.test(password);
    }
    // Ejemplo de uso
const resultadoValidacionNombre = validarNombre(name);
const resultadoValidacionCelular = validarCelular(celular);
const resultadoValidacionDireccion = validarDireccion(direccion);
const resultadoValidacionContraseña = validarContraseña(password);

if (!resultadoValidacionNombre) {
  console.log("El nombre no es válido");
}
if (!resultadoValidacionCelular) {
  console.log("El número de celular no es válido");
}
if (!resultadoValidacionDireccion) {
  console.log("La dirección no es válida");
}
if (!resultadoValidacionContraseña) {
  console.log("La contraseña no es válida");
}
    // Enviar los datos del formulario al servidor
    const data = {
      name: name,
      apellidos: apellidos,
      direccion: direccion,
      celular: celular,
      rep_password: rep_password,
      password: password
    };

    // Por ejemplo, usando la función fetch()

    // Ejemplo de solicitud fetch:
    fetch("url_del_servidor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      // Manejar la respuesta del servidor aquí
      console.log(response);
    })
    .catch(function(error) {
      // Manejar errores aquí
      console.error(error);
    });
  });