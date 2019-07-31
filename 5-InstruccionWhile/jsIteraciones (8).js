function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	do{
		numero= parseInt(prompt("Ingrese el numero"));

		if (numero >0){
			positivo = positivo + numero
		}
		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN