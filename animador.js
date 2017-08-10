//la idea es hacer el codigo adaptable a celular, falta el css
function inicio()
{
	var canvas = document.getElementById("cajita");
	canvas.height = 400;
	canvas.width = 700;

	//solo mientras estamos desarrollando
	canvas.style.backgroundColor = "gray";
	var pantalla = canvas.getContext("2d");


	var separacion = canvas.width/20;
	var anchoLineas = (canvas.width/5) - separacion;
	var altoLineas = (((canvas.height/4)*3) - canvas.height/4)/6;
	var xInicial = separacion;
	var yInicial = (((canvas.height/4)*3) - canvas.height/4) - altoLineas/2;


	function dibujarCalle()
	{
		//linea de arriba
		pantalla.beginPath();
		pantalla.strokeStyle = "black";
		pantalla.moveTo(0, canvas.height/4);
		pantalla.lineTo(canvas.width, canvas.height/4);
		pantalla.closePath();
		pantalla.stroke();

		//linea de abajo
		pantalla.beginPath();
		pantalla.strokeStyle = "black";
		pantalla.moveTo(0, (canvas.height/4)*3);
		pantalla.lineTo(canvas.width, (canvas.height/4)*3);
		pantalla.closePath();
		pantalla.stroke();
	}

function dibujarCuadros(xReferencia)
	{
		for (; xReferencia < canvas.width; xReferencia = xReferencia + separacion) 
		{
			pantalla.fillStyle = "yellow";
			pantalla.fillRect(xReferencia, yInicial,anchoLineas, altoLineas);
			pantalla.stroke();
			xReferencia = xReferencia + anchoLineas;
		}
	}

	function animar ()
	{
	pantalla.clearRect(0,0, canvas.width, canvas.height);
	dibujarCuadros(xInicial);
	dibujarCalle();

	xInicial -= 5;

	}
	setInterval(animar,34);


}


