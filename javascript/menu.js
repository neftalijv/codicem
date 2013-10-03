function menuMovil(){
	$('nav li').show();
	$('nav ul').slideToggle(1000);
	$('.expand p').hide();
	$('.expand p#inicial').show();
}

function botonExpandir(){
	$('.expand').click(function(){
		$('nav ul').slideToggle(1000);
		$('.expand p').toggle();
	});
}

function menuPc(){
	$('nav ul').show();
	$('nav li').hide();
	var delay = 300*5;
	$.each($('nav li'), function(){
		$(this).delay(delay).fadeIn(1000);
		delay -=300;
	});
}


var mayorA1020 = new Redimencionar();
mayorA1020.setAnchoMinimo(1021);
mayorA1020.setAnchoMaximo(null);
mayorA1020.addDisparador("cargar", botonExpandir);
mayorA1020.addDisparador("redimencionar", menuPc, true);
mayorA1020.addDisparador("cargar", menuPc);
mayorA1020.ejecutar();

var menorA1021 = new Redimencionar();
menorA1021.setAnchoMinimo(0);
menorA1021.setAnchoMaximo(1020);
menorA1021.addDisparador("cargar", menuMovil);
menorA1021.addDisparador("cargar", botonExpandir);
menorA1021.addDisparador("redimencionar", menuMovil, true);
menorA1021.ejecutar();
