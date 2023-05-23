// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.

let numero = Number(prompt("Digite o número para verificar se é primo:"));
let primo = true;

if (numero <= 1){
    primo = false;
}else{
    for (let i = 2; i < numero; i++){
        if (numero % i === 0){
            primo = false;
            break;
        }
    }
}

if (primo){
    document.write(numero+" é primo!")
}else{
    document.write(numero+" não é primo!")
}