function recogerDetalles()
{
  //Solo me recolecta los datos del primer producto, ya que solo recolecta los datos del primer class
  let nombreProducto = document.querySelector('.titulo-producto').textContent;
  let precioProducto = document.querySelector('.precio').textContent;

  const producto = {
    nombre: nombreProducto,
    precio: precioProducto,
  };

  localStorage.setItem("datosProducto",JSON.stringify(producto));

}
