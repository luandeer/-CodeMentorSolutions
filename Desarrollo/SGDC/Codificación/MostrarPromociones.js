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


function recogerDetalles()
{
  //Solo me recolecta los datos del primer producto, ya que solo recolecta los datos del primer class
  let nombreProducto = document.querySelector('.nombre-producto').textContent;
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

}
