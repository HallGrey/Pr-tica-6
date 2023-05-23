// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoAtual = Number(prompt("Digite o ano atual:"));
let anoNascimento = Number(prompt("Digite seu ano nascimento:"));

let idade = anoAtual - anoNascimento

if (idade >= 16){
    document.write("Você está apto para votar")
}else{
    document.write("Você não está apto para votar")
}