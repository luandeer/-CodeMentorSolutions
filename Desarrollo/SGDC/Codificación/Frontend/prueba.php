<?php
$servername = "localhost";
$username = "root";
$password = "root";
$database = "bd_sgdc";

// Intentar realizar la conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
    $response = array('status' => 'error', 'message' => 'Error en la conexión a la base de datos');
} else {
    $response = array('status' => 'success', 'message' => 'Conexión exitosa a la base de datos');
}

// Devolver la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
