 var bandeja = [0, 1, 300, 3, 11, 5, 85, 7, 45, 9, 52, 36, 1, 900];

 function ordenarParesOImpares(numeros) {
     var $pares = $("#pares");
     var $impares = $("#impares");
     //  recorrer todos los números
     for (var i = 0; i < numeros.length; i++) {
         var numero = numeros[i];
         // por cada uno calcular su resto de 2
         var resto = numero % 2;
         // si el resto es igual a 0, entonces el numero es par
         if (resto == 0) {
             // es par
             $pares.append("<li>"+numero+"</li>");
         } else {
             // es impar
             $impares.append("<li>"+numero+"</li>");
         }
     }
     $pares.css({"background":"green","width":"50%"}).slideUp(3000).delay(0).slideDown(4000);
     $impares.css({"background":"red","color":"white"}).fadeOut(3000,function(){
         $(this).fadeIn(4000);
     })
 }

$(function(){
    ordenarParesOImpares(bandeja);
})

 