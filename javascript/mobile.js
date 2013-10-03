var comparacionAnterior;

var igual       = 0;
var menor       = 1;
var mayor       = 2;
var menorOIgual = 3;
var mayorOIgual = 4;
var noIgual     = 5;

function redimencionar(comparacionAnterior1, comparacionActual1, funcionx){
console.info(funcionx.name);
	if(comparacionAnterior1 != comparacionActual1){
		funcionx();
	}
}


function condicionResolucion(objScriptsDinamicos){

	var comparacionActual;
	$(window).resize(function(){
		$.each(objScriptsDinamicos,function(){
			comparacionActual   = (this.ancho - $(window).width()) <= 0;
		
			switch(this.condicion){
				case igual:
					console.info("esta funcion no esta permitida");
					break;
				case noIgual:
					console.info("esta funcion no esta permitida");
					break;
				case menor:
					if(this.ancho > $(window).width())
						redimencionar(comparacionAnterior, comparacionActual, this.funcionRedimencionar);
					break;
				case menorOIgual:
					if(this.ancho >= $(window).width()){
						redimencionar(comparacionAnterior, comparacionActual, this.funcionRedimencionar);
					}
					break;
				case mayor:
					console.log("mayor");
					console.log($(window).width());
					console.log(this.ancho);
					if(this.ancho < $(window).width()){
						redimencionar(comparacionAnterior, comparacionActual, this.funcionRedimencionar);
					}
					break;
				case mayorOIgual:
					if(this.ancho <= $(window).width())
						redimencionar(comparacionAnterior, comparacionActual,  this.funcionRedimencionar);
					break;
			}
		
		});
		comparacionAnterior = comparacionActual;
	});
	$(window).load(function(){
		$.each(objScriptsDinamicos,function(){

		
			switch(this.condicion){
				case igual:
					console.info("esta funcion no esta permitida");
					break;
				case noIgual:
					console.info("esta funcion no esta permitida");
					break;
				case menor:
					if($(window).width() < this.ancho){
						this.funcionRedimencionar();
						estadoAnterior = $(window).width();
						if(this.funcionCargar != null) {
							this.funcionCargar();
						}
					}
					break;
				case menorOIgual:
					if($(window).width() <= this.ancho){
						this.funcionRedimencionar();
						comparacionAnterior = false;
						if(this.funcionCargar != null) {
							this.funcionCargar();
						}
					}
					break;
				case mayor:
					if($(window).width() > this.ancho){
						this.funcionRedimencionar();
						comparacionAnterior = true;
						if(this.funcionCargar != null) {
							this.funcionCargar();
						}
					}
					break;
				case mayorOIgual:
					if($(window).width() >= this.ancho){
						this.funcionRedimencionar();
						estadoAnterior = $(window).width();
						if(this.funcionCargar != null) {
							this.funcionCargar();
						}
					}
					break;
			}
		});
	});
}