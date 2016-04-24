$(document).ready(function(){


$('#myModal').modal('show');
$("#loading").hide();


$('.modal-dialog').draggable();


$( "#aceptarModal" ).click(function() {
  $("body").css("cursor", "wait")
  $("#loading").show();
});


setTimeout(function(){  

$('#myModal').modal('hide');
$("body").css("cursor", "default");
$("#zonaDeTrabajo").hide().fadeIn(2000);

// Notificación de Bienvenida
	$.notify({
  icon: 'contenido/img/dronb.png',
	title: '<strong>¡Bienvenido!</strong>',
	message: '<p>Con esta aplicación podras planear tu propio plan de vuelo por Miami, ¡Diviertete!.</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
	type: 'info noPrint',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});

// Zonas Rojas
setInterval(function() {
  if (cursorX.value < 495){
  	$( "#zonaDeTrabajo" ).effect( "shake" );
  	$.playSound('comportamiento/sound/gdi_warning').delay(500)
  	$.playSound('comportamiento/sound/alarm')
   	$.notify({
  icon: 'contenido/img/danger.png',
	title: '<strong>¡DANGER!</strong>',
	message: '<p>Your drone is flying on a really dangerous area, ¡Go out right away!</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
	type: 'danger',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});
};
}, 2500);


setInterval(function() {
  if (cursorX.value > 1200){
    $( "#zonaDeTrabajo" ).effect( "shake" );
    $.playSound('comportamiento/sound/gdi_warning').delay(500)
    $.notify({
  icon: 'contenido/img/danger.png',
  title: '<strong>¡DANGER!</strong>',
  message: '<p>Your drone is flying on a really dangerous area, ¡Go out right away!</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
  type: 'danger',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});
};
}, 2500);


//Zona Roja Sup
setInterval(function() {
  if (cursorX.value < 1000 && cursorX.value > 545 && cursorY.value < 171 && cursorY.value > 126)  {
  	$( "#zonaDeTrabajo" ).effect( "shake" );
  	$.playSound('comportamiento/sound/gdi_warning').delay(500)
   	$.notify({
  icon: 'contenido/img/danger.png',
	title: '<strong>¡DANGER!</strong>',
	message: '<p>Your drone is flying on a really dangerous area, ¡Go out right away!</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
	type: 'danger',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});
};
}, 2500);

//Zona Roja Der
setInterval(function() {
  if (cursorX.value < 1050 && cursorX.value > 999 && cursorY.value < 560 && cursorY.value > 60)  {
    $( "#zonaDeTrabajo" ).effect( "shake" );
    $.playSound('comportamiento/sound/gdi_warning').delay(500)
    $.notify({
  icon: 'contenido/img/danger.png',
  title: '<strong>¡DANGER!</strong>',
  message: '<p>Your drone is flying on a really dangerous area, ¡Go out right away!</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
  type: 'danger',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});
};
}, 2500);

//Zona Roja Fondo
setInterval(function() {
  if (cursorX.value < 1000 && cursorX.value > 545 && cursorY.value < 507 && cursorY.value > 443)  {
  	$( "#zonaDeTrabajo" ).effect( "shake" );
  	$.playSound('comportamiento/sound/gdi_warning').delay(500)
   	$.notify({
  icon: 'contenido/img/danger.png',
	title: '<strong>¡DANGER!</strong>',
	message: '<p>Your drone is flying on a really dangerous area, ¡Go out right away!</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
	type: 'danger',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});
};
}, 2500);

// Zonas Amarillas
setInterval(function() {
  if (cursorX.value < 540 && cursorX.value > 495)  {
  	$.playSound('comportamiento/sound/attention')
   	$.notify({
  icon: 'contenido/img/warning.png',
	title: '<strong>¡ATTENTION!</strong>',
	message: '<p>Your drone is getting closer a really risky area, ¡Turn around!</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
	type: 'warning',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});
};
}, 2500);

//Zona Amarrilla Sup-Sup
setInterval(function() {
  if (cursorX.value < 1000 && cursorX.value > 545 && cursorY.value < 114 && cursorY.value > 69)  {
    $.playSound('comportamiento/sound/attention')
    $.notify({
  icon: 'contenido/img/warning.png',
  title: '<strong>¡ATTENTION!</strong>',
  message: '<p>Your drone is getting closer a really risky area, ¡Turn around!</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
  type: 'warning',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});
};
}, 2500);

//Zona Amarrilla Sup-Boto
setInterval(function() {
  if (cursorX.value < 1000 && cursorX.value > 545 && cursorY.value < 212 && cursorY.value > 170)  {
    $.playSound('comportamiento/sound/attention')
    $.notify({
  icon: 'contenido/img/warning.png',
  title: '<strong>¡ATTENTION!</strong>',
  message: '<p>Your drone is getting closer a really risky area, ¡Turn around!</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
  type: 'warning',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});
};
}, 2500);

//Zona Amarrilla Fondo-Sup
setInterval(function() {
  if (cursorX.value < 1000 && cursorX.value > 545 && cursorY.value < 443 && cursorY.value > 419)  {
  	$.playSound('comportamiento/sound/attention')
   	$.notify({
  icon: 'contenido/img/warning.png',
	title: '<strong>¡ATTENTION!</strong>',
	message: '<p>Your drone is getting closer a really risky area, ¡Turn around!</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
	type: 'warning',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});
};
}, 2500);


//Zona Amarrilla Fondo-Boto
setInterval(function() {
  if (cursorX.value < 1000 && cursorX.value > 545 && cursorY.value < 546 && cursorY.value > 507)  {
  	$.playSound('comportamiento/sound/attention')
   	$.notify({
  icon: 'contenido/img/warning.png',
	title: '<strong>¡ATTENTION!</strong>',
	message: '<p>Your drone is getting closer a really risky area, ¡Turn around!</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
	type: 'warning',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});
};
}, 2500);


//Zona Amarrilla Der-1
setInterval(function() {
  if (cursorX.value < 1000 && cursorX.value > 960 && cursorY.value < 564 && cursorY.value > 237)  {
    $.playSound('comportamiento/sound/attention')
    $.notify({
  icon: 'contenido/img/warning.png',
  title: '<strong>¡ATTENTION!</strong>',
  message: '<p>Your drone is getting closer a really risky area, ¡Turn around!</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
  type: 'warning',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});
};
}, 2500);

//Zona Amarrilla Der-1
setInterval(function() {
  if (cursorX.value < 1100 && cursorX.value > 1058 && cursorY.value < 564 && cursorY.value > 237)  {
    $.playSound('comportamiento/sound/attention')
    $.notify({
  icon: 'contenido/img/warning.png',
  title: '<strong>¡ATTENTION!</strong>',
  message: '<p>Your drone is getting closer a really risky area, ¡Turn around!</p>'
},{
    offset: {
    x: 10,
    y: 70
  },
  type: 'warning',
  icon_type: 'img',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<img data-notify="icon" class="img-circle pull-left">' +
    '<span data-notify="title">{1}</span>' +
    '<span data-notify="message">{2}</span>' +
  '</div>'
});
};
}, 2500);

}, 9000);


var seconds_left = 100;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;

    if (seconds_left <= 0)
    {
       document.getElementById('timer_div').innerHTML = "Your battery is over, get a new one";
       clearInterval(interval);
       location.reload();
    }
}, 9000);





  });




