// 15. Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

let lado1 = Number(prompt("Informe o primeiro lado"));
let lado2 = Number(prompt("Informe o segundo lado"));
let lado3 = Number(prompt("Informe o terceiro lado"));

if (lado1 < lado2 + lado3 || lado2 < lado1 + lado3 || lado3 < lado1 + lado2){
    document.write("É um triangulo! <br>")
}

if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
    document.write("E ele é Isósceles")
}else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
    document.write("E ele é Escaleno")
}else if (lado1 == lado2 && lado2 == lado3){
    document.write("E ele é Equilátero")
}else{
    document.write("Não é um triangulo")
}
