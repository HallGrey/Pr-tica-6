// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7

let altura = Number(prompt("Digite sua altura"));
let sexo = Number(prompt("Digite o número para seu sexo (1) Masculino e (2) Feminino"));
let pesoIdeal = 0;

switch(sexo){
    case 1:
        pesoIdeal = (72.7 * altura) - 58
        break;
    case 2:
        pesoIdeal = (62.1 * altura) - 44.7
        break;
}

document.write("Seu peso ideal é de "+pesoIdeal.toFixed(2)+" Kg")