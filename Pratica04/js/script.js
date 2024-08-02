function calculaQuadrados(){
    numeros = document.getElementById("numerosDigitados").value;
    numeros = numeros.split(",");

    //document.write("Parabéns por usar nosso programa ultra moderno!" + "<br>"+"<br>");
    for(i=0; i<numeros.length; i++){
        quadrado = parseInt(numeros[i]) * parseInt(numeros[i]);
       // document.write(numeros[i] + "² = " + quadrado + "<br>");
       alert(numeros[i] + "² = " + quadrado);
    }
}


function verificaMaior(){
    numeros = document.getElementById("numerosDigitados").value;
    numeros = numeros.split(",");
    maior = parseInt(numeros[0]);
    for(i=1; i<numeros.length; i++){
        if(parseInt(numeros[i])>maior){
            maior = parseInt(numeros[i]);
        }
    }
    alert("O maior valor digitado é " + maior);
}