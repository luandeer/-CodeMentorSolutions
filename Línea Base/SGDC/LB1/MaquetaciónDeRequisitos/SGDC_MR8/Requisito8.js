// Obtener los botones de "Ordenar Ahora"
const orderButtons = document.querySelectorAll('.menu-item button');

// Agregar evento click a cada botón
orderButtons.forEach(button => {
	button.addEventListener('click', () => {
		// Obtener el nombre del producto y su precio
		const productName = button.parentNode.querySelector('h3').textContent;
		const productPrice = button.parentNode.querySelector('.price').textContent;
		// Mostrar un mensaje de confirmación de orden
		alert(`Has ordenado ${productName} por ${productPrice}`);
	});
});