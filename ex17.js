// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

let eleitores = Number(prompt("Digite o número de eleitores:"));
let votosBrancos = Number(prompt("Digite o número de votos brancos:"));
let votosNulos = Number(prompt("Digite o número de votos nulos:"));
let votosValidos = Number(prompt("Digite o número de votos válidos:"));
let totalVotos = votosBrancos + votosNulos + votosValidos;

if (totalVotos != eleitores){
    document.write("Informações não batem!<br>");
}

let porBrancos = votosBrancos/totalVotos
let finalBrancos = porBrancos*100

document.write(`Voto Brancos: ${finalBrancos.toFixed(2)}%<br>`);

let porNulos = votosNulos/totalVotos
let finalNulos = porNulos*100

document.write(`Voto Nulos: ${finalNulos.toFixed(2)}%<br>`);

let porValidos = votosValidos/totalVotos
let finalValidos = porValidos*100

document.write(`Voto Válidos: ${finalValidos.toFixed(2)}%<br>`);

