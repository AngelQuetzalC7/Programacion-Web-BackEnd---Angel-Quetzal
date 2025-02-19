<?php
// Configuración de los parámetros de conexión
$host = "localhost"; // Cambiar si es un servidor remoto
$usuario = "root"; // Usuario de la base de datos
$password = ""; // Contraseña del usuario
$base_de_datos = "contacto_db"; // Nombre de tu base de datos

// Crear la conexión
$conn = new mysqli($host, $usuario, $password, $base_de_datos);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Si la conexión es exitosa
echo "Conexión exitosa a la base de datos.";
//$conn->close();
?>
