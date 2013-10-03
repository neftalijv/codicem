<script>
	var filename = window.location.pathname.split( '/' ).pop();
	filename = filename.replace('.php','');
	if(typeof jQuery == 'undefined'){
		window.location = "index.php?p=" + filename;
	}else{
		$(document).pjax('form','#contenido');
	}
</script>
<section id="contacto" >
	<form action="index.php?p=contacto2" method="post" name="contacto">
		<label for="nombre">Nombre: </label>
		<input type="text" name="nombre" placeHolder="ej: Juan López" required/>
		<label for="correo">Correo: </label>
		<input type="email" title="juanlopez@gmail.com" pattern="^[a-zA-Z][a-zA-Z0-9\.\_\-]+@[a-zA-Z0-9\_\-]{2,}(\.[a-zA-Z]{2,})+$" name="correo" placeHolder="ej: juanlopez@gmail.com" required/>
		<label for="telefono" >Telefono: </label>
		<input type="tel" title="3338123345" name="telefono" pattern="^[0-9]{10}$" placeHolder="ej: 3338123345" />
		<label for="asunto">Asunto: </label>
		<input type="text" name= "asunto" placeHolder="ej: Página web" required/>
		<label for="mensaje">Mensaje: </label>
		<textarea name="mensaje" placeHolder="Aquí escriba sus dudas o requerimientos "></textarea>
		<input class="button" type="submit" name="enviar" value="Enviar">
	</form >
</section>
<aside>
	<section id="facebook">
		<a target="_blank" href="https://www.facebook.com/codicem"><img src="images/facebook_logo.png" /></a>
	</section>
	<section id="twitter"><a target="_blank" href="http://www.twitter.com/codicemmx"><img src="images/twitter_logo.png" /></a></section>
	<section id="google">
		<a target="_blank" href="https://plus.google.com/111700598516396254577">
			<img src="images/google_logo.png" />
		</a>
	</section>
</aside>