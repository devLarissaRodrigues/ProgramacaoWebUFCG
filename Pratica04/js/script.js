function calculaQuadrados(){
    var numeros = document.getElementById("numerosDigitados").value;
    numeros = numeros.split(",");

    //document.write("Parabéns por usar nosso programa ultra moderno!" + "<br>"+"<br>");
    for(i=0; i<numeros.length; i++){
        quadrado = parseInt(numeros[i]) * parseInt(numeros[i]);
       // document.write(numeros[i] + "² = " + quadrado + "<br>");
       alert(numeros[i] + "² = " + quadrado);
    }
}


function verificaMaior(){
    var numeros = document.getElementById("numerosDigitados").value;
    numeros = numeros.split(",");
    maior = parseInt(numeros[0]);
    for(i=1; i<numeros.length; i++){
        if(parseInt(numeros[i])>maior){
            maior = parseInt(numeros[i]);
        }
    }
    alert("O maior valor digitado é " + maior);
}

function verificaMaiorIdade(){
    var idades = document.getElementById("idadesDigitadas").value;
    idades = idades.split(",");
    var maioridade = 0;
    var menoridade = 0;

    for(i=0; i<idades.length; i++){
        if(parseInt(idades[i]) >= 18){
            maioridade++;
        }
        else{
            menoridade++;
        }
        mensagem = ("Há " + maioridade + " pessoa(s) de maior, enquanto há " + menoridade + " pessoa(s) de menor");
    }
    alert(mensagem);
}

function analisaData(){
    var data = document.getElementById("dataDigitada").value;
    data = data.split("/");
    
    alert("O dia é " + data[0] + ". O mês é " + data[1] + ". O ano é " + data[2]);
}

function inversorDeTexto(){
    var texto = document.getElementById("textoDigitado").value;
    var aux = '';

    for(i=texto.length-1; i>=0; i--){
        aux += texto[i];
    }
    alert("A inversão de '" + texto + "' é '" + aux + "'.");
}

function ordenaLista(){
    var numeros = document.getElementById("numerosDigitados").value;
    numeros = numeros.split(",");

    let menor = numeros[0];
    for(i=1; i<numeros.length; i++){
        if(numeros[i] < menor){
            menor = numeros[i];
        }
    }
    alert(menor);
}