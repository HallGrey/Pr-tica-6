// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

let numeroSemana = Number(prompt("Digite o número que vocÊ saber qual dia da semana é:"));

if (numeroSemana === 1){
    document.write("Domingo");
}else if (numeroSemana === 2){
    document.write("Segunda-feira");
}else if (numeroSemana === 3){
    document.write("Terça-feira");
}else if (numeroSemana === 4){
    document.write("Quarta-feira");
}else if (numeroSemana === 5){
    document.write("Quinta-feira");
}else if (numeroSemana === 6){
    document.write("Sexta-feira");
}else if (numeroSemana === 7){
    document.write("Sábado");
}else{
    document.write("Dia não reconhecido");
}