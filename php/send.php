<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$mail = $_POST['email'];
$message = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Mensaje enviado por: " . $name . " \r\n";
$message .= "E-mail: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n\n\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'info@alcaalrenovables.com';
$asunto = 'Contacto Alcaal Renovables';

mail($para, $asunto, utf8_decode($message), $header);
sleep(7);
header("Location:" . $_SERVER['HTTP_REFERER']);
?>