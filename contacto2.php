<?php
	include('clases/config.php');
	$config = new Config();
	$mensaje  = "Que tal equipo:\n\tEste correo es para notificar que alguien a tratado de ponerse en contacto con nosotros, ";
	$mensaje .= "Si deciden responder el correo por favor notifiquen a los demás miembros de que se tomo el Owner del mensaje.\n";
	$mensaje .= "\tLos datos del contactante son los siguientes:\n";
	$mensaje .= "Nombre: ".$_POST['nombre']."\n";
	$mensaje .= "Correo Electónico: ".$_POST['correo']."\n";
	$mensaje .= "Teléfono: ".@$_POST['telefono']."\n";
	$mensaje .= "Asunto: ".$_POST['asunto']."\n";
	$mensaje .= "Mensaje: ".@$_POST['mensaje']."\n";
	$mensaje .= "\n\n\nGracias,\n\n Notificaciones de codicem.com.mx";
	mail($config->correosSalida->toString(), "Contacto Codicem", $mensaje);
	echo "<p style='text-align:left; padding:1em'>Gracias por contactarnos, en breve una persona de nuestro equipo se contactará con usted por alguno de los medios que nos ha proporcionado.<br/><br/><br/>Atte: El equipo de Codicem.</p>"
?>