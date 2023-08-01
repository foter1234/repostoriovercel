function enviar(){
    var numero = document.getElementById("numero") 
     
    var classea =  1000;
    var classeaprivado = 10000;
    var classeamax = 127000 
    var classeb =  128000;
    var classebprivado = 1761600;
    var classebmax = 1912550
    var classec =  1920000;
    var classecprivado = 19216800;
    var classecmax = 223255255255
     
     

     if(numero.value == classeaprivado){
        document.getElementById("resposta").innerHTML="o endereço pertence a classe a, e sua mascara padrão é 255.0.0.0 e é uma rede privada"
   
      }else if(numero.value >= classea && numero.value <= classeamax){
        document.getElementById("resposta").innerHTML="o endereço pertence a classe A, e sua mascara padrão é 255.0.0.0"
      }
       if(numero.value == classebprivado){
        document.getElementById("resposta").innerHTML="o endereço pertence a classe b, e sua mascara padrão é 255.255.0.0 e pertence a uma rede privada"
   
      }else if(numero.value >= classeb && numero.value <= classebmax){
        document.getElementById("resposta").innerHTML="o endereço pertence a classe b, e sua mascara padrão é 255.255.0.0"
   
      }
       if(numero.value == classecprivado){
        document.getElementById("resposta").innerHTML="o endereço pertence a classe c, e sua mascara padrão é 255.255.255.0 e pertence a uma rede privada"
        
      }else if(numero.value >= classec && numero.value <= classecmax){
        document.getElementById("resposta").innerHTML="o endereço pertence a classe c, e sua mascara padrão é 255.255.255.0"
        
      }
   }