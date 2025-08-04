const nome = "Luiz Otavio Miranda";
const sobrenome = "Miranda";
const idade = 30;
let peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura);
let anoAtual = 2025;
const anoNascimento = anoAtual - idade;

//console.log(nome.toLocaleLowerCase())
//console.log(anoNascimento)
//console.log(imc)
//console.log(peso)
//console.log(idade)
//console.log(altura)
//console.log(anoAtual)

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome.split(" ")[0].toLowerCase()} ${sobrenome.toLowerCase()} nasceu em ${anoNascimento}.`);
