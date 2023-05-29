<?php
$servername = "localhost";
$username = "root";
$password = "root";
$database = "SGDC_DB";

// Crea la conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verifica si hay errores de conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
