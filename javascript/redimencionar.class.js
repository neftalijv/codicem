
/**
 * @class Permite agregar caracteristicas dentro de un rango de anchos por medio de funciones 
 * disparadas en el momento indicado.
 * @author Neftali Jauregui
 * @requires jQuery
 * @property {Number} anchoMaximo Determina el ancho maximo donde será valido el disparar los eventos.
 */

/**
 * Inicializa la clase.
 * @constructor
 */
function Redimencionar(){

	var anchoMaximo         = 0;

	/**
	 * Determina el ancho minimo donde será valido el disparar los eventos.
	 * @type {Number} Medida en pixeles.
	 */
	var anchoMinimo         = 0;

	/**
	 * Variable que almacena el ancho anterior de la ventana para determinar
	 * si el estado sigue siendo el mismo o si se ha modificado.
	 * @type {Number} Medida pixeles.
	 */
	var dependenciaDeEstado = $(window).width();

	/**
	 * Arreglo donde se almacenan los disparadores con sus funciones a disparar
	 * y si la función se disparara cada vez que se cambie de estado o siempre.
	 * @type {Array}
	 */
	var disparadores        = [];

	/**
	 * Añade un nuevo elemento de disparo al objeto.
	 * @param {String}          disparador           Tipo del disparador, puede ser "cargar" o "redimencionar".
	 * @param {Object Function} funcion              Funcion que será lanzada cuando la condicion se cumpla.
	 * @param {Boolean}         dependenciaDeEstado1 Esta variable determina si se verificara que el estado 
	 * 												 no coincida con el anterior (true) o no (false).
	 */
	this.addDisparador = function(disparador, funcion, dependenciaDeEstado1){
		dependenciaDeEstado1 = !dependenciaDeEstado1 ? false : dependenciaDeEstado;
		disparadores.push({disparador : disparador, funcion : funcion, dependenciaDeEstado : dependenciaDeEstado1});
	}

	this.getDependenciaDeEstado = function(){
		return dependenciaDeEstado;
	}

	/**
	 * Retorna el arreglo de todos los disparadores agregados a esta condicion
	 * @return {Array} Disparadores que fueron agregados mientras la condicion se cumpla
	 */
	this.getDisparadores = function(){
		return disparadores;
	}

	/**
	 * Regresa el ancho máximo
	 * @return {Number} Ancho máximo que condiciona la ejecución de este grupo de disparadores. 
	 */
	this.getAnchoMaximo = function(){
		return anchoMaximo;
	}

	/**
	 * Regresa el ancho mínimo
	 * @return {Number} Ancho mínimo que condiciona la ejecución de este grupo de disparadores.
	 */
	this.getAnchoMinimo = function(){
		return anchoMinimo;
	}

	/**
	 * Permite definir el ancho maximo que condiciona a los disparadores.
	 * @param {Number} ancho Ancho maximo que condiciona la ejecución de este grupo de disparadores.
	 */
	this.setAnchoMaximo = function(ancho){
		anchoMaximo = ancho;
	}

	/**
	 * Permite definir el ancho minimo que condiciona a los disparadores.
	 * @param {Number} ancho Ancho que será asignado al atributo "anchoMinimo"
	 */
	this.setAnchoMinimo = function(ancho){
		anchoMinimo = ancho;
	} 

	this.setDependenciaDeEstado = function(dependencia){
		dependenciaDeEstado = dependencia;
	}
}


/**
 * Se encarga de agregar las funciones de la forma correcta al código de jQuery.
 * @return {Void}
 */
Redimencionar.prototype.ejecutar = function(){

	var obj = this;
	$.each(this.getDisparadores(), function(){
		var obj2 = this;
		switch(this.disparador.toUpperCase()){
			case "CARGAR":
				$(window).load(function(){
					var condicion = obj.getAnchoMaximo() == null ? true : ($(window).width() <= obj.getAnchoMaximo());
					//console.info("ancho maximo = " + condicion);
					condicion = ($(window).width() >= obj.getAnchoMinimo()) && condicion;
					//console.info("ancho minimo = " + ($(window).width() >= obj.getAnchoMinimo()) );
					//console.info("resultado = " + condicion);
					//console.info("dependenciaDeEstado " + obj2.dependenciaDeEstado);
					if(condicion)
						obj2.funcion();
				});
				break;
			case "REDIMENCIONAR":
				$(window).resize(function(){
					if(obj2.dependenciaDeEstado){
						var cond1 = obj.getAnchoMaximo() == null ? true : (obj.getDependenciaDeEstado() <= obj.getAnchoMaximo());
						//console.info("obj.dependenciaDeEstado: "+obj.dependenciaDeEstado)
						cond1 = (obj.getDependenciaDeEstado() >= obj.getAnchoMinimo()) && cond1;
						cond1 = !cond1;
						obj.setDependenciaDeEstado($(window).width());
					}else{
						var cond1 = true;
					}
					//console.info("cond1:"+cond1);
					var condicion = cond1; 
					//console.info(condicion ? obj.getAnchoMaximo()+","+obj.getAnchoMinimo() : "")
					condicion = (obj.getAnchoMaximo() == null ? true : ($(window).width() <= obj.getAnchoMaximo())) && condicion;
					//console.info("ancho maximo = " + condicion);
					condicion = ($(window).width() >= obj.getAnchoMinimo()) && condicion;
					//console.info("ancho minimo = " + ($(window).width() >= obj.getAnchoMinimo()) );
					//console.info("resultado = " + condicion);
					//console.info("dependenciaDeEstado " + obj2.dependenciaDeEstado);
					if(condicion)
						obj2.funcion();
				});
				break;
			default:
				console.info("disparador invalido seleccionado " + this.funcion);
				break;
		}
	});
}

// Pruebas
/*
function cargar(){
	console.info("Cargado 1020 o menos");
}

function redimencionar(){
	console.info("Redimencionando 1020 o menos");
}

function cargar1(){
	console.info("Cargado 1021 en delante");
}

function redimencionar1(){
	console.info("Redimencionando 1021 en delante");
}

var algo = new Redimencionar();
algo.setAnchoMinimo(0);
algo.setAnchoMaximo(1020);
algo.addDisparador('cargar', cargar);
algo.addDisparador('redimencionar',redimencionar, true);
//console.info(algo.getDisparadores());
//console.info(algo);
algo.ejecutar();

var algo2 = new Redimencionar();
algo2.setAnchoMinimo(1021);
algo2.setAnchoMaximo(null);
algo2.addDisparador('cargar', cargar1);
algo2.addDisparador('redimencionar',redimencionar1, true);
//console.info(algo2);
algo2.ejecutar();
*/



