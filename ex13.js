// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

let numero = Number(prompt("Digite o número que vai encerrar a contagem"))

for (i = 1; i < numero; i += 2){
    document.write(` ${i} `)
}