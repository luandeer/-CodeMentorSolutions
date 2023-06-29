// Obtén una referencia al elemento canvas en el que se dibujará el gráfico
var canvas = document.getElementById("ventas-chart");

// Crea el contexto del gráfico
var ctx = canvas.getContext("2d");

// Define los datos para el gráfico de barras
var data = {
  labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
  datasets: [
    {
      label: "Ventas",
      data: [1500, 2200, 1800, 2500, 2100],
      backgroundColor: "rgba(139, 0, 0, 0.8)",
      borderColor: "rgba(0, 0, 0, 1)",
      borderWidth: 1
    }
  ]
};

// Crea el objeto de configuración del gráfico
var options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// Crea el gráfico de barras utilizando los datos y opciones definidas
var chart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: options
});