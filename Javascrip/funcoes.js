function somar(){
    var num1;//Declarando a variável
    var num2;//Declarando a variável
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = "A soma dos números é: " + res;
}//fim do método

function subtrair(){
    var num1;//Declarando a variável
    var num2;//Declarando a variável
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = "A subtração dos números é: " + res;
}//fim do método

function multiplicar(){
    var num1;//Declarando a variável
    var num2;//Declarando a variável
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = "A multiplicação dos números é: " + res;
}//fim do método

function dividir(){
    var num1;//Declarando a variável
    var num2;//Declarando a variável
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 / num2;
    if(num2 <= 0){
        res ="Impossivel dividir por números menos ou iguais a ZERO!!";
    }else{
            res = num1 / num2;
    }
    
    document.getElementById("resultado").innerHTML = "A divisão dos números é: " + res;
}//fim do método

function tabuada(){
    var num1;
    var num2;
    

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value); 

    var resNum1 = "Tabuada do " + num1;
    var resNum2= "Tabuada do " + num2;

    for(i = 0; i <= 10; i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);

        document.getElementById("resultado").value = "\n" + resNum1 + "\n\n" + resNum2;
    }

}//fim do método


//Faça uma função para calcular potencia

function potencia(){
    var num1;//Declarando a variável
    var num2;
    var res;
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo

    document.getElementById("resultado").innerHTML = "A potencia é: " + Math.pow(num1, num2);
}

//Faça uma função para calcular a raiz dos dois números 

function raiz(){
    var num1;//Declarando a variável

    var res;
    Math.sqrt(res);
    
    //Coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    //Realizando o cálculo
    

    document.getElementById("resultado").innerHTML = "A raiz de " + num1 + " é: "+ Math.sqrt(num1);
    
}

//Faça uma função para calcular a formula de bhaskara

function bhaskara(){
    var a;
    var b;
    var c;
    var delta;
    var x1;
    var x2;

    a = parseInt(documentElementById("tpnum"). value);
    b = parseInt(documentElementById("tsnum"). value);
    c = parseInt(documentElementById("ttnum"). value);

    //1º Calcular delta
    delta =math.pow(b,2) - 4 * a * c;

    //2ª Parte: Calcular x1 e x2 se delta não for negativo
    if(delta >= 0){
        x1 = (-b + math.sqrt(delta))/(2*a);
        x2 = (-b - math.sqrt(delta))/(2*a);
    }
    else{
        x1 = "Impossivel calcularx1, pois o delta pé negativo";
        x2 = "Impossivel calcular x2, pois o delta é negativo";

        //Mostrar na tela 
        document.getElementById("resultado").innerHTML = "\nDelta" + delta + "\n\nX1: " + x1 + "\nX2: " + x2;
    }
}// fim do metodo

//Faça um programa que peça ao usuario um numero e imprima se é par ou impar.

function parImpar(){
    var num1;
    
    num1 = parseInt(document.getElementById("tpNum").value);

    if(num1 % 2 == 0)
    {
        res= " Par!"
       
    }
    else{
        res = " Impar!"
       
    }
    

document.getElementById("resultado").innerHTML =  "O número escolhido" + " é:"+ res;
}

//Faça um programa que peça ao usuario um numero e imprima se é positivo, negativo ou zero.

function poNeZe(){
    var num1;
    var res;
   
    
    num1 = parseInt(document.getElementById("tpNum").value);

    if(num1 > 0){
        res = " Positivo!";
    }
    if(num1 == 0){
        res = " Zero!";
    }
    if(num1 < 0){
        res = " Negativo!"
    }

document.getElementById("resultado").innerHTML = "O número escolhido" + " é:"+ res;
   
}

// EXERCÍCIO 1 /Números de 1 a 10.

function umDez(){
    var res;
    i = 0;
    i = i++;
    
    do{
      i = i++
    }
    while(i == 10);

    
    
        document.getElementById("resultado").value = "\n" + resNum1 + "\n\n" + i;
}

