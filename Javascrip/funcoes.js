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

function potencia(){
    var num1;
    var num2;
    i;
    i++
    
    

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    var resNum1 = "Potencia do " + num1;
    var resNum2= "Potencia do " + num2;

    res = num1 * i;
    for(i= 0; i <= num2; i++){

        resNum1 += "\n" + num1 + " * " + i + " = " + (res);
        resNum2 += "\n" + num2 + " * " + num2 + " = " + (res);

    document.getElementById("resultado").innerHTML = "A potência de " + num1 + " é: "+ res ;
    }
}


function raiz(){
    var num1;
    var num2;


    num1 = parseInt(documentElementById("tpNum").value);
    num2 = parseInt(documentElementById("tsNum").value);

    var resNum1 = "Raiz de " + num1;
    var resNum2 = "Raiz de " + num2;

    resNum1 +="\n" + num1 + ""


    document.getElementById("resultado").innerHTML = "A raiz de " + num1 + " é: " + res;
}
//Faça uma função para calcular potencia

//Faça uma função para calcular a raiz dos dois números 

//Faça uma função para calcular a formula de bhaskara

//Faça um programa que peça ao usuario um numero e imprima se é par ou impar.

//Faça um programa que peça ao usuario um numero e imprima se é positivo, negativo ou zero.