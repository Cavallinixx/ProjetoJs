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
}//fim do método 

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
   
}//fim do método 

// EXERCÍCIO 1 /Números de 1 a 10.

function umDez(){
    var i = 1; 
    var num1 = ""; 

    do {
        num1+= i + " "; 
        i++; 
    } while (i <= 10); 
    
    document.getElementById("resultado").innerText = "Os números são: " + "\n" + num1;
}//fim do método 

// EXERCÍCIO 2/ Números pares de 1 a 20.

function numPar(){
    var i = 1; 
    var num1 = ""; 
   
    do{
 
        if(i % 2 == 0){
            num1 += i + " ";
        }
        i++
        
   }while(i <= 20);
   document.getElementById("resultado").innerText = "Os números são pares são: " + "\n" + num1;

}//fim do método 

//EXERCÍCIO 3/ Calcular soma dos números de 1 a 100.

function umACem(){
    var num1;
    var num2;
    var res;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

        if(num1 <=100){
            res = num1 + " + " + num2 + " = " + (num1 + num2);
        }
        else{
            res="Não é possível termeinar esse cálculo, por gentileza digite um número entre UM E CEM!! "
        } 
        if(num2 <=100){
            res;
        }
        else{
        res="Não é possível termeinar esse cálculo, por gentileza digite um número entre 1 e 100!! "
        } 

    document.getElementById("resultado").innerText = " O resultado é: " + "\n" + res;
}////fim do método 

//EXERCÍCIO 4/ Imprimir os múltiplos de 5 de 1 a 50

function multiplosCinco() {
    var i = 1;
    
    for (let i = 1; i <= 50; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
    document.getElementById("resultado").innerHTML = "A sequência dos multiplos de 5 números até 50 é: " + i+ + '';
}




//EXERCÍCIO 5/ Mostrar todos os números até o escolhido ao usuário.
function umAteNum() {
    var num1 = parseInt(document.getElementById("tpNum").value);
    var i = 1;
    var res = "";

    while (i <= num1) {
        res += i + " ";
        i++;
    }//fim do while

    document.getElementById("resultado").innerHTML = "A sequência até seu número é: " + res;


}//fim do método 

// EXERCÍCIO 6/ um número e imprima a soma dos números de 1 até esse número. 
function calcularSoma() {
    var num1;
    var res = 0;

    var num1 = parseInt(document.getElementById("tpNum").value);
    // Realiza a soma dos números de 1 até o número informado pelo usuário
    for (var i = 1; i <= num1; i++) {
        res += i;
    }

    // Exibe o resultado na página
    document.getElementById("resultado").innerText = "A soma dos números de 1 até " + num1 + " é: " +   res;
}



//EXERCÍCIO 7/ 
function numPrimo() {
    var i = 1;
    var num1;
    
    for (var i = 5; i * i <= num1; i += 6) {
        if (num1 % i == 0 || num1 % (i + 2) == 0) return false;
    }
    return true;
    }
    
    document.getElementById("resultado").innerHTML = "Os números primos de 1 a 20, são: " + num1 +  i + '';

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
}//fim do método 

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
   
}//fim do método 

// EXERCÍCIO 1 /Números de 1 a 10.

function umDez(){
    var i = 1; 
    var num1 = ""; 

    do {
        num1+= i + " "; 
        i++; 
    } while (i <= 10); 
    
    document.getElementById("resultado").innerText = "Os números são: " + "\n" + num1;
}//fim do método 

// EXERCÍCIO 2/ Números pares de 1 a 20.

function numPar(){
    var i = 1; 
    var num1 = ""; 
   
    do{
 
        if(i % 2 == 0){
            num1 += i + " ";
        }
        i++
        
   }while(i <= 20);
   document.getElementById("resultado").innerText = "Os números são pares são: " + "\n" + num1;

}//fim do método 

//EXERCÍCIO 3/ Calcular soma dos números de 1 a 100.

function umACem(){
    var num1;
    var num2;
    var res;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

        if(num1 <=100){
            res = num1 + " + " + num2 + " = " + (num1 + num2);
        }
        else{
            res="Não é possível termeinar esse cálculo, por gentileza digite um número entre UM E CEM!! "
        } 
        if(num2 <=100){
            res;
        }
        else{
        res="Não é possível termeinar esse cálculo, por gentileza digite um número entre 1 e 100!! "
        } 

    document.getElementById("resultado").innerText = " O resultado é: " + "\n" + res;
}////fim do método 

//EXERCÍCIO 4/ Imprimir os múltiplos de 5 de 1 a 50

function multiplosCinco() {
    var i = 1;
    
    for (let i = 1; i <= 50; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
    document.getElementById("resultado").innerHTML = "A sequência dos multiplos de 5 números até 50 é: " + i+ + '';
}




//EXERCÍCIO 5/ Mostrar todos os números até o escolhido ao usuário.
function umAteNum() {
    var num1 = parseInt(document.getElementById("tpNum").value);
    var i = 1;
    var res = "";

    while (i <= num1) {
        res += i + " ";
        i++;
    }//fim do while

    document.getElementById("resultado").innerHTML = "A sequência até seu número é: " + res;


}//fim do método 

// EXERCÍCIO 6/ um número e imprima a soma dos números de 1 até esse número. 
function calcularSoma() {
    var num1;
    var res = 0;

    var num1 = parseInt(document.getElementById("tpNum").value);
    // Realiza a soma dos números de 1 até o número informado pelo usuário
    for (var i = 1; i <= num1; i++) {
        res += i;
    }

    // Exibe o resultado na página
    document.getElementById("resultado").innerText = "A soma dos números de 1 até " + num1 + " é: " +   res;
}



//EXERCÍCIO 7/ imprima os números primos de 1 a 20. 
function numPrimo() {
    var i = 1;
    
    
    for (var i = 5; i * i <= numero; i += 6) {
        if (numero % i == 0 || numero % (i + 2) == 0) return false;
    }
    return true;

   
    }
    
document.getElementById("resultado").innerHTML = "Os números primos de 1 a 20, são: " + i+ + '' + numero;


//EXERCÍCIO 8/ peça ao usuário um número e verifique se é primo. 

function primo(){
    var num1
    var i;
    

    num1 = parseInt(document.getElementById("tpNum").value);

    if((num1<= 1)){
        document.getElementById("resultado").value = "O número " + num1 + " não é primo.";
        
    return;
    }
    var primo = true;

    for(var i = 2; i<num1; i++){
        if (num1 % i === 0){
            primo = false;
            break;
        }
    }

    if (primo) {
        document.getElementById("resultado").value = "O número " + num1 + " é primo.";
    } else {
        document.getElementById("resultado").value = "O número " + num1 + " não é primo.";
    }
}

//EXERCÍCIO 9/ Calcular fatorial do número.--------------------------------------

function numFatorial() {
    var num = parseInt(document.getElementById("tpNum").value);
    var resultado = 1; // Inicializa o resultado como 1

    // Calcula o fatorial de num
    for (var i = 1; i <= num; i++) {
        resultado *= i;
    }

    // Exibe o resultado
    var resultadoElemento = document.getElementById("resultado");
    if (resultadoElemento) {
        resultadoElemento.textContent = "O valor de " + num + "!"+ " é " + resultado;
    } else {
        console.error("O elemento com id 'resultado' não foi encontrado.");
    }
}

//EXERCÍCIO 10/ Sequência do Fibonacci até o decimo termo.

function fibonacci() {
    var resultado = document.getElementById("resultado");

    // Verifica se o elemento com id "resultado" existe
    if (resultado) {
        resultado.value = ""; 

        var termo1 = 0;
        var termo2 = 1;
        var proximoTermo;

        // Imprime os dois primeiros termos da sequência de Fibonacci
        resultado.value += termo1 + ", " + termo2 + ", ";

        // Calcula e imprime os próximos termos até o décimo
        for (var i = 3; i <= 10; i++) {
            proximoTermo = termo1 + termo2;
            resultado.value += proximoTermo + ", ";
            termo1 = termo2;
            termo2 = proximoTermo;
        }
    } else {
        console.error("O elemento com id 'resultado' não foi encontrado.");
    }
}
    

//EXERCÍCIO 11/ Imprima os números pares e impares de 1 até o numero.

function imprimirParImpar() {
    var num1 = parseInt(document.getElementById("tpNum").value);
    var resultadoPar = ""; // String para armazenar os números pares
    var resultadoImpar = ""; // String para armazenar os números ímpares

    for (var i = 1; i <= num1; i++) {
        if (i % 2 === 0) {
            resultadoPar += i + " "; // Adiciona número par à string de resultados
        } else {
            resultadoImpar += i + " "; // Adiciona número ímpar à string de resultados
        }
    }

    // Exibe os resultados
    var resultadoElemento = document.getElementById("resultado");
    if (resultadoElemento) {
        resultadoElemento.innerText = "Os números pares são: " + resultadoPar + "\n" +
                                       "Os números ímpares são: " + resultadoImpar;
    } else {
        console.error("O elemento com id 'resultado' não foi encontrado.");
    }
}

//EXERCÍCIO 12/um número e imprima os números primos de 1 até esse número.


function imprimirPrimosAteN(num) {
    num1 = parseInt(document.getElementById("tpNum").value); 

    var primos = "";

    // Loop de 2 até o número fornecido
    for (var i = 2; i <= num1; i++) {
        var ehPrimo = true; // Assume que o número atual é primo

        // Verifica se o número atual é divisível por qualquer número menor que ele mesmo
        for (var j = 2; j < i; j++) {
            if (i % j === 0) { // Se for divisível por outro número que não seja 1 e ele mesmo
                ehPrimo = false; // Não é primo
                break; // Sai do loop interno
            }
        }

        // Se o número for primo, adiciona-o à string de primos
        if (ehPrimo) {
            primos += i + " ";
        }
    }

    // Exibe os números primos na página
    document.getElementById("resultado").value = "Números primos até " + num1 + ": " + primos;
}

//EXERCÍCIO 13/ Verificarse os números são perfeitos.
function verificarNumeroPerfeito() {
    var num1;
    num1 = parseInt(document.getElementById("tpNum").value); 
    var somaDivisores = 0;

    // Loop para encontrar os divisores do número
    for (var i = 1; i < num1; i++) {
        if (num1 % i === 0) {
            somaDivisores += i; // Adiciona o divisor à soma
        }
    }

    // Verifica se a soma dos divisores é igual ao próprio número
    if (somaDivisores === num1) {
        document.getElementById("resultado").value = num1 + " é um número perfeito!";
    } else {
        document.getElementById("resultado").value = num1 + " não é um número perfeito.";
    }
}




