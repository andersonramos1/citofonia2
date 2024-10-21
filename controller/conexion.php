<?php
$host = "localhost";    // Nombre del host (puede ser 'localhost' si es local)
$user = "root";   // Nombre de usuario de la base de datos
$password = ""; // Contraseña del usuario de la base de datos
$dbname = "sesion"; // Nombre de la base de datos

// Crear una conexión
$conn = new mysqli($host, $user, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

echo "Conexión exitosa";

// Cerrar la conexión
$conn->close();
?>
