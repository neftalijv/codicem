<?php
	class CorreosSalida{
		private $correosSalida;

		public function __construct() {
			$this->correosSalida = array();
		}

		public function push($var) {
			if(preg_match("/[a-zA-Z][a-zA-Z0-9\.\-\_]+@[a-zA-Z0-9\-\_]{2,}(\.[a-zA-Z0-9\-\_]{2,})+/", $var)){
				array_push($this->correosSalida, $var);
			}else{
				echo "error con un correo ".$var;
			}
		}

		public function toString(){
			$resultado = "";
			foreach ($this->correosSalida as $correo) {
				$resultado = $resultado == "" ? $correo : $resultado.", ".$correo;
			}
			return $resultado;
		}

	}
?>