const datosProducto = localStorage.getItem("datosProducto");

if(datosProducto)
{
    const producto = JSON.parse(datosProducto);
    document.getElementById("nombreProducto").innerText = producto.nombre;
    document.getElementById("precioProducto").innerText = producto.precio;
}
else
{
    document.getElementById("nombreProducto").innerText = "---";
    document.getElementById("precioProducto").innerText = "---";
}

function removerLocalStorage()
{
    localStorage.removeItem("datosProducto");
}
