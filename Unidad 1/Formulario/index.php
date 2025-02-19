
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  <link rel="stylesheet" href="style.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap" rel="stylesheet">

  <title>Formulario de contacto</title>
  <body class="body">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

  <div class="form-container">

    <h1>Contáctanos</h1>

    <form action="send.php" method="POST">
      
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="primer_nombre" class="form-label">Nombre  *</label>
          <input type="text" id="primer_nombre" name="primer_nombre" required>
        </div>
        <div class="col-md-6">
          <label for="last-name" class="form-label">Apellido  *</label>
          <input type="text" id="apellido" name="apellido" required>
        </div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Dirección de correo electrónico  *</label>
        <input type="email" id="correo" name="correo" required>
      </div>
      <div class="row mb-3">
        <label class="form-label">Tipo de consulta *</label>
        <!-- General -->
        <div class="col-md-6">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="TipoConsulta" id="general" value="general" required>
            <label class="form-check-label" for="general">Consulta general</label>
          </div>
        </div>
        <!-- Soporte -->
        <div class="col-md-6">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="TipoConsulta" id="soporte" value="support" required>
            <label class="form-check-label" for="soporte">Solicitud de soporte</label>
          </div>
        </div>
      <div class="mb-3">
        <label for="message" class="form-label">Mensaje *</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="concentimiento" name="consent" required>
        <label class="form-check-label" for="consent">Autorizo ser contacto por el equipo *</label>
      </div>
      <button type="submit" class="btn">Submit</button>
    </form>
  </div>

</body>

</html>
