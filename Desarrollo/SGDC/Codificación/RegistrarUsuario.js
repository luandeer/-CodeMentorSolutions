document.getElementById("registrationForm").addEventListener("submit", function(event)
 {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Obtener los valores ingresados por el usuario
    var name = document.getElementById("name").value;
    var apellidos = document.getElementById("apellidos").value;
    var direccion = document.getElementById("direccion").value;
    var celular = document.getElementById("celular").value;
    var password = document.getElementById("password").value;
    var rep_password = document.getElementById("rep-password").value;
    
    // Aquí puedes realizar validaciones adicionales si es necesario
    function validarCelular(celular) {
      const celularRegex = /^\d{9}$/;
      return celularRegex.test(celular);
    }
    function validarNombre(nombre) {
      const nombreRegex = /^[a-zA-Z\s]+$/;
      return nombreRegex.test(nombre);
    }
    function validarDireccion(direccion) {
      const direccionRegex = /^[a-zA-Z0-9\s\-.,#áéíóúÁÉÍÓÚñÑ]+$/;
      return direccionRegex.test(direccion);
    }
    // Validación de la contraseña (mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número)
    function validarContraseña(contraseña) {
      const contraseñaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return contraseñaRegex.test(contraseña);
    }
    // Ejemplo de uso
const resultadoValidacionNombre = validarNombre(nombre);
const resultadoValidacionApellido = validarNombre(apellido);
const resultadoValidacionCelular = validarCelular(celular);
const resultadoValidacionDireccion = validarDireccion(direccion);
const resultadoValidacionContraseña = validarContraseña(contraseña);

if (!resultadoValidacionNombre) {
  console.log("El nombre no es válido");
}

if (!resultadoValidacionApellido) {
  console.log("El apellido no es válido");
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
    var data = {
      name: name,
      apellidos: apellidos,
      direccion: direccion,
      celular: celular,
      rep_password: rep_password,
      password: password
    };
  
    // Aquí puedes realizar una solicitud AJAX para enviar los datos al servidor


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