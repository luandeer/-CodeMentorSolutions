/*
// Obtener Nombre Único del <div> de las Promociones
const orderButtons = document.querySelectorAll(".menu-item button");

// Agregar evento click a cada botón
orderButtons.forEach(button => {
	button.addEventListener("click", () => {
		// Obtener el nombre del producto y su precio
		const nombreProducto = button.parentNode.querySelector("h3").textContent;
		const precioProducto = button.parentNode.querySelector(".precio").textContent;

		const producto = {
			nombre: nombreProducto,
			precio: precioProducto,
		  };
		
		  localStorage.setItem("datosProducto",JSON.stringify(producto));


		
		// Mostrar un mensaje de confirmación de orden
		alert('Has ordenado '+nombreProducto+' por '+precioProducto);
		
	});
});
*/
const btnElegir = document.querySelector(".botonElegir");

btnElegir.addEventListener("click", () => {
  let nombreProducto = document.querySelector('.titulo-producto').textContent;
  let precioProducto = document.querySelector('.precio').textContent;

  console.log(nombreProducto);
  console.log(precio);

  alert(nombreProducto);
  alert(precio);

  const producto = {
    nombre: nombreProducto,
    precio: precioProducto,
  };

  localStorage.setItem("datosProducto",JSON.stringify(producto));

});
