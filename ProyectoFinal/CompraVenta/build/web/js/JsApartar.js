 $("#RApartar").validate({
                
                rules:{
                   Fecha:{required:true},
                   Estado:{required:true},
                    Usuario:{required:true},
                    Automovil:{required:true}
                    
           }, messages: {
               
                   Fecha:{required:"Ingrese la fecha de hoy"},
                   Estado:{required:"Seleccione un estado"},
                 Usuario:{required:"Seleccione un Usuario"},
                 Automovil:{required:"Seleccione un Automovil"}
           }
            });