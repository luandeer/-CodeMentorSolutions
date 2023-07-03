function mostrarDetallesEntrega()
{
    let opcionDelivery = document.getElementById('opcionDelivery');
    let opcionTienda = document.getElementById('opcionTienda');
    let divEntregaDelivery = document.getElementById('opcion-entrega-delivery');
    let divEntregaTienda = document.getElementById('opcion-entrega-tienda');

    if(opcionDelivery.checked)
    {
        divEntregaDelivery.style.display = "block";
    }
    if(opcionTienda.checked)
    {
        divEntregaTienda.style.display = "block";
    }
}