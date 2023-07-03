<?php
function dbQuery($sql) {
    // Se declara una función para poder conectarnos
    $DBHost = "localhost"; //"127.0.0.1"
    $DBname = "BD_SGDC"; //Nombre de la base de datos que utilizaremos para la TA
    $DBUser = "root"; // El usuario por defecto es el root
    $DBPass = "root"; // Esta es la contraseña por defecto
    $connDB = mysqli_connect("$DBHost","$DBUser","$DBPass", $DBname);
    if (mysqli_connect_errno())  { 
      echo "Error: No se pudo conectar a MySQL." . PHP_EOL;
    }
}
?>
