<?php
 //Guardamos los datos escritos por el usuario
  $nombre = $_POST['Name'];
  $tratamiento = $_POST['Tratamiento'];
  $tel = $_POST['phone'];
  $correo = $_POST['correo'];

  //Estructura del correo
  $mensaje = "Este mensaje fue enviado por " . $nombre . "\r\n";
  $mensaje .= "Su dirección de correo es: " . $correo . "\r\n";
  $mensaje .= "Su teléfono es: " . $tel . "\r\n";
  $mensaje .= "Solicita información sobre el tratamiento de " . $tratamiento . "\r\n";
  $mensaje .= "Mensaje enviado el " .date('d/m/Y', time());

  //destinatario
  $destinatario = 'elizabeth.baquero@odontologiaelizabethbaquero.com';
  $asunto = "Solicito información sobre " . $tratamiento;
  
  //enviar email
  $header = "Email enviado desde Odontología Elizabeth Baquero";
  $mail = mail($destinatario, $asunto, $mensaje, $header);

  if($mail) {
    header('Location:exito.html');
  }

?>