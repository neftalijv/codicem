<!DOCTYPE html>
<html lang="es">
	<head>
		<title>Codicem</title>
		<meta charset="utf-8"  />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="styles/estilos.css">
		<link rel="author" type="text/plain" href="humans.txt" />
		<link rel="shortcut icon" type="image/x-icon" href="favico2.ico" />
		
		<!-- jQuery -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="js/libs/jquery-1.7.min.js">\x3C/script>')</script>

		<!-- FlexSlider -->
		<script defer src="javascript/jquery.flexslider.js"></script>
		<script src="javascript/jquery.pjax.js" ></script>
		<script src="javascript/redimencionar.class.js" ></script>
		<script src="javascript/menu.js" ></script>
		<script>
			$(window).load(function(){
				
				$('.menu a').click(function(event){
					event.preventDefault();
				});

				$(document).pjax('#botones a','#contenido');
			});
		</script>

		<!--[if lt IE 9]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js" ></script>
		<! [endif] -->

	</head>
	<body>
		<header>
			<h1>
				<a href="http://www.codicem.com.mx">
					<img id="hlogo" alt="codicem.com" src="images/codicem_horizontal_logo.png" />
				</a>
			</h1>
				<ul class="menu">
					<li><a class="expand" href="#"><p id="inicial">&Xi;</p><p style="display:none;color:red;">&Xi;</p></a></li>
				</ul>
			<nav>
				<ul id="botones">
					<li><a id="inicio" href="inicio.php" >Inicio</a></li>
					<li><a id="acerca" href="acerca.php">Acerca</a></li>
					<li><a id="sercicios" href="servicios.php">Servicios</a></li>
					<li><a id="trabajos" href="trabajos.php">Trabajos</a></li>
					<li><a id="contacto" href="contacto.php">Contacto</a></li>
				</ul>
			</nav>
		</header>
		<section id="contenido">
			<?php
				if(!$_GET['p']){
					$_GET['p'] = 'inicio';
				}
				include($_GET['p'] . '.php');
			?>
		</section>
		<footer>Publicidad</footer>
	</body>
</html>