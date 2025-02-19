
    <?php
    // Incluir archivo de conexión
    include 'conexion.php';

    // Verificar que los datos fueron enviados a través del formulario
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Capturar los datos del formulario
        $primer_nombre = $_POST['primer_nombre'];
        $apellido = $_POST['apellido'];
        $correo = $_POST['correo'];
        $TipoConsulta = $_POST['TipoConsulta'];
        $mensaje = $_POST['message'];

        // Validar que no haya campos vacíos
        if (!empty($primer_nombre) && !empty($apellido) && !empty($correo) && !empty($TipoConsulta) && !empty($mensaje)) {
            // Construir la consulta SQL para insertar los datos
            $sql = "INSERT INTO contactos (primer_nombre, apellido, correo, TipoConsulta, mensaje) 
                VALUES ('$primer_nombre', '$apellido', '$correo', '$TipoConsulta', '$mensaje')";

            // Ejecutar la consulta
            if ($conn->query($sql) === TRUE) {
                echo "Los datos se han guardado exitosamente.";
            } else {
                echo "Error al guardar los datos: " . $conn->error;
            }
        } else {
            echo "Por favor, completa todos los campos obligatorios.";
        }
    } else {
        echo "Método de solicitud no válido.";
    }

    // Cerrar la conexión a la base de datos
    $conn->close();
    ?>