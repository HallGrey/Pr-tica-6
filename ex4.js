// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

let numeroSemana = Number(prompt("Digite o número que vocÊ saber qual dia da semana é:"));

switch (numeroSemana){
    case 1:
        document.write("Domingo");
        break;
    case 2:
        document.write("Segunda-feira");
        break;
    case 3:
        document.write("Terça-feira");
        break;
    case 4:
        document.write("Quarta-feira");
        break;
    case 5:
        document.write("Quinta-feira");
        break;
    case 6:
        document.write("Sexta-feira");
        break;
    case 7:
        document.write("Domingo");
        break;
    default:
        document.write("Dia não reconhecido");
        break;
}