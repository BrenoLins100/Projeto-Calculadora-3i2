// This is a JavaScript file
$(document).on("click","#calcular", function(){
    var valor1 = parseInt($("#valor1").val()); //pega o valor do elemento 
    var valor2 = parseInt($("#valor2").val()); 
    
    var result = valor1 + valor2;
    
    $("#valor3").val(result);
    
    
    });
