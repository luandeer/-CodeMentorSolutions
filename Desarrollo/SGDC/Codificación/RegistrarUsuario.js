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
    if((name.length > 0) && (apellidos.length > 0) && (direccion.length > 0) && (rep_password.length > 0) && (password.length > 0) && (celular.length > 0))
    {
        alert("Registro Exitoso");
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