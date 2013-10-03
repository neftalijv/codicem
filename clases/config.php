<?php

	include("clases/config/correosSalida.php");

	class Config{
		public $correosSalida;

		public function __construct(){
			$this->correosSalida = new CorreosSalida();
			$this->correosSalida->push("neftalijv@gmail.com");
			$this->correosSalida->push("nallelyreyeshernandez@gmail.com");
			$this->correosSalida->push("edtiburcio92@hotmail.com");
			$this->correosSalida->push("ivan_3034@hotmail.com");
			$this->correosSalida->push("ddgap@live.com");
		}
	}
?>