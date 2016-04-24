// Se llama Jquery

$(document).ready(function(){
	$(".mapas").hide();

// Condicional Ubicacion

var ubicacion = "valor";

if (ubicacion == 'Florida') 
	{	$("#mapaFlorida").show(); 
		$("#map").hide();
};

$('#container').on("mousemove", function (e) {
  $('#cursor').offset({ 
     left: (e.pageX - cursorOffset.left)
   , top : (e.pageY - cursorOffset.top)
  })

});

});
