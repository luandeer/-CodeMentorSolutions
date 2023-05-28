document.getElementById("registrationForm").addEventListener("submit", function(event)
 {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Obtener los valores ingresados por el usuario
    var celular = document.getElementById("celular").value;
    var password = document.getElementById("password").value;
    
    // Aquí puedes realizar validaciones adicionales si es necesario
    if((password.length > 0) && (celular.length > 0))
    {
        alert("¡ BIENVENIDO !");
    }

    // Enviar los datos del formulario al servidor
    var data = {
      celular: celular,
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