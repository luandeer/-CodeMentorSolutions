function mostrarFecha()
{
  var fechaActual = new Date();
  var dia = fechaActual.getDate();
  var mes = fechaActual.getMonth() + 1; // Los meses van de 0 a 11
  var año = fechaActual.getFullYear();

  // Formatear la fecha como "DD/MM/AAAA"
  var fechaFormateada = dia + '/' + mes + '/' + año;

  // Mostrar la fecha en un elemento HTML con el id "fecha"
  document.getElementById('fecha-factura').textContent = fechaFormateada;
}