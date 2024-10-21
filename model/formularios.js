//inicio de sesión 
$(document).ready(function(){
  
    //CENTRAR LOGIN
    
      $('input[type="text"], input[type="password"]').focus(function(){
          $(this).animate({'width': '+=10px', 'padding': '0 +=8px'}, 180)
      }).focusout(function(){
          $(this).animate({'width': '-=10px', 'padding': '0 5px'}, 180)
      });
  
  });
  //contactos
  $('.button').on('click', function () {
    $('.contacto').css("margin-left", "60%");
    $('.contacto').css("transition-property", "all");
    $('.contacto').css("transition-duration", ".5s");
    $('.contacto').css("transition-timing-function", "linear");
    $('.contacto').css("transition-delay", ".2s");

    $('.contenido_formulario').css("display", "none");
    $('.contenido_formulario').css("transition-property", "all");
    $('.contenido_formulario').css("transition-duration", "1s");
    $('.contenido_formulario').css("transition-timing-function", "lineal");
    $('.contenido_formulario').css("transition-delay", ".5s");

    $('.correo_enviado').css("display", "block");
    $('.correo_enviado').css("transition-property", "all");
    $('.correo_enviado').css("transition-duration", "1s");
    $('.correo_enviado').css("transition-timing-function", "lineal");
    $('.correo_enviado').css("transition-delay", ".5s");

    $('#envio_exitoso').css("visibility", "visible");
    $('#envio_exitoso').css("opacity", "1");

    $('#contactanos').css("visibility", "hidden");
    $('#contactanos').css("opacity", "0");
    $('#contactanos').css("transition-property", "visibility");
    $('#contactanos').css("transition-duration", "0s");
    $('#contactanos').css("transition-timing-function", "opacity");
    $('#contactanos').css("transition-delay", "1.2s");
});