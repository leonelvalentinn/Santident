<?php
  require_once "recaptchalib.php"; 
  $clave = $_ENV['SECRET'];
  $secret = "6LeNKZkpAAAAAFN2LXUuDCjmgwzXvzxNUxOLDNXm"; 
  $response = null; 

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'vendor/autoload.php';
  $mail = new PHPMailer(true);

  $mail->IsHTML(true);
  //$mail->IsSMTP(true);

  // Gmail
  $mail = new PHPMailer();
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  /* Variables para el uso de Mailtrap 
  $mail->Host = 'sandbox.smtp.mailtrap.io';
  $mail->SMTPAuth = true;
  $mail->Port = 2525;
  $mail->Username = '90a1d2227a3db4';
  $mail->Password = '55003c61d145fe';
  /* Variables necesarias para el envío de correos por GMAIL */
  $mail->SMTPAuth = true; // enable SMTP authentication
  $mail->SMTPSecure = "ssl"; // sets the prefix to the server
  $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
  $mail->Port = 465; // set the SMTP port for the GMAIL server
  $mail->Username = "dentariosmx@gmail.com"; // GMAIL username
  $mail->Password = "piwdqjmtrvtpkfbb"; // GMAIL password
  
  // Verificamos la clave secreta 
  $reCaptcha = new ReCaptcha($secret); 
  if ($_POST["g-recaptcha-response"]) { 
    $response = $reCaptcha->verifyResponse( $_SERVER["REMOTE_ADDR"], $_POST["g-recaptcha-response"] ); 
  } 
  if ($response != null && $response->success) { 
    //Guardamos los datos escritos por el usuario
    $nombre = $_POST['Name'];
    $tratamiento = $_POST['Tratamiento'];
    $tel = $_POST['phone'];
    $correo = $_POST['correo'];
    $subject = 'Hola, Solicito información sobre '. $tratamiento;
    //Estructura del correo
    $mail->From = $correo;
    $mail->FromName = $nombre;
    $email_template = 'mail_template.html';
    $email = 'linoulises.maldonadomich@gmail.com'; //linoulises.maldonadomich@gmail.com
    $f_name = 'Dr. Lino';

    $message = file_get_contents($email_template);
    $message = str_replace('%nombre%', $nombre, $message);
    $message = str_replace('%tratamiento%', $tratamiento, $message);
    $message = str_replace('%phone%', $tel, $message);
    $message = str_replace('%correo%', $correo, $message);
    
    $mail->MsgHTML($message);
    $mail->Subject = $subject;
    $mail->AddAddress($email, $f_name);
    $mail->send();
    
    // Send mail   
    if (!$mail) {
      echo 'Email not sent an error was encountered: ' . $mail->ErrorInfo;
    } else {
      header('Location:exito.html');
    }
  } else { 
    header('Location:index.php');
  }
?>