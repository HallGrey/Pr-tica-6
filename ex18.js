// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:
// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

let preco = Number(prompt("Digite o preço de tabela:"));
let parcela = Number(prompt("Digite o número de parcelas:"));
let valorFinal = 0;
let valorPorcentagem = 0;
let valorParcela = 0;

if (parcela === 1){
    valorPorcentagem = (preco * 2.5)/100
    valorFinal = preco - valorPorcentagem
    document.write(`Você irá pagar R$${valorFinal} à vista.`)
}else if (parcela >= 2 && parcela <= 5){
    valorFinal = preco / parcela
    document.write(`Você vai pagar R$${preco.toFixed(2)} em ${parcela} vezes de R$${valorFinal.toFixed(2)}`)
}else if (parcela >= 6 && parcela <= 10){
    valorPorcentagem = (preco * 6)/100
    valorFinal = preco + valorPorcentagem
    valorParcela = valorFinal / parcela
    document.write(`Você vai pagar R$${valorFinal.toFixed(2)} em ${parcela} vezes de R$${valorParcela.toFixed(2)}`)
}else if (parcela >= 11 && parcela <= 15){
    valorPorcentagem = (preco * 13)/100
    valorFinal = preco + valorPorcentagem
    valorParcela = valorFinal / parcela
    document.write(`Você vai pagar R$${valorFinal.toFixed(2)} em ${parcela} vezes de R$${valorParcela.toFixed(2)}`)
}else{
    document.write("Valor máximo de parcelas em 15x")
}

