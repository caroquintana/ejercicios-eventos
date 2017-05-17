function mostrarMensaje(){
	var boton = document.getElementById("demo");
	boton.addEventListener("click", function(){
		alert("hola, estoy sobre el menu");
	});	
}
mostrarMensaje();

function paginaCargada(){
	alert("La página ya está cargada");
   };

function sobreMi(){
	alert("¡Estás sobre mí! :)");
};

function noSobreMi(){
	alert("¡Ya no estás sobre mí! :(");
};