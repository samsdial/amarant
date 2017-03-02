/*jshint strict:true, browser:true, jquery:true */
$(document).ready(function($){
    $('#btn_form').click(function() {
        var day = $("#day").val();
        var month = $("#month").val();
        var year = $("#year").val();
        var name = $("#name").val();
        var email = $("#email").val();
        var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        if(day == ""){
            $('#alerta p').fadeIn("slow");
		    $('#alerta p').html('Ingrese su día de nacimiento *');
      		$("#day").focus();
			return false;
        }else if(month == "0"){
            $('#alerta p').fadeIn("slow");
		    $('#alerta p').html('Ingresa su mes de nacimiento *');
      		$("#month").focus();
			return false;
        }else if(year == ""){
            $('#alerta p').fadeIn("slow");
		    $('#alerta p').html('Ingresa su año de nacimiento *');
      		$("#year").focus();
			return false;
        }else if(name==""){
   			$('#alerta p').fadeIn("slow");
		    $('#alerta p').html('Ingresa tu Nombre *');
      		$("#name").focus();
			return false;
        }else if(email=="" || !validacion_email.test(email)){
            $('#alerta p').fadeIn("slow");
		    $('#alerta p').html('Ingresa un email valido *');
      		$("#email").focus();
			return false;
        }else if($('#checkbox').prop('checked') == false){
            $('#alerta p').fadeIn("slow");
		    $('#alerta p').html('Debe aceptar los terminos *');
			return false;
        }else{
            var datos ='&day=' + day +
            '&month=' + month +
            '&year=' + year +
            '&name=' + name +
            '&email=' + email ;
            var variable= jQuery.ajax({
                type: "POST",
                url: "register.php",
                data: datos,
                async: false
            }).reponseText;
            
            //variable= variable.replace(/\s/g,'');
            if(variable == "error"){
                $('#alerta p').fadeIn("slow");
                $("#alerta p").html('Error, intente por favor más tarde');
                return false;
            }else if(variable == "exito"){
                $('#alerta p').fadeIn("slow");
                $('#alerta p').html('Gracias por contactarnos *');
                $("#day").val("");
                $("#name").val("");
                $("#email").val("");
                return false;
            }
            return false;
        }
    });
});