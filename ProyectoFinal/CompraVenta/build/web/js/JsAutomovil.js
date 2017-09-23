    $("#RAuto").validate({
                
                rules:{
                   TxtFecha:{required:true},
                   TxtComentario:{required:true,minlength:10,maxlength:150}
                   
                   
           }, messages: {
               
                   TxtFecha:{required:"Ingrese la fecha de hoy"},
                   TxtComentario:{required:"Ingrese su comentario",minlength:"el comentario no puede tener menos de diez caracteres", maxlength:"Comentario demasiado largo"},
                 
           }
            });