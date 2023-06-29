// Obtener Nombre Único del <div> de las Promociones
const orderButtons = document.querySelectorAll(".menu-item button");

// Agregar evento click a cada botón
orderButtons.forEach(button => {
	button.addEventListener("click", () => {
		// Obtener el nombre del producto y su precio
		const nombreProducto = button.parentNode.querySelector("h3").textContent;
		const precioProducto = button.parentNode.querySelector(".precio").textContent;
		// Mostrar un mensaje de confirmación de orden
		alert('Has ordenado '+nombreProducto+' por '+precioProducto);
	});
});