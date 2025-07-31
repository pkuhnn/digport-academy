let numero1 = 12;
let numero2 = 8;
let numero3 = 4;

// Escrever os numeros
console.log("Números:", numero1, numero2, numero3);

let maior;
let menor;

// Verifica o maior
if (numero1 >= numero2 && numero1 >= numero3) {
  maior = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
  maior = numero2;
} else {
  maior = numero3;
}

// Verifica o menor
if (numero1 <= numero2 && numero1 <= numero3) {
  menor = numero1;
} else if (numero2 <= numero1 && numero2 <= numero3) {
  menor = numero2;
} else {
  menor = numero3;
}

console.log("Maior número:", maior);
console.log("Menor número:", menor);

//Verificar positivo
if (numero3 > 0) {
    console.log("Este número é positivo.")
}

//Verificar negativo 
if (numero3 < 0) {
    console.log("Este número é negativo.")
}
//Verificar zero
if (numero3 = 0) {
    console.log("Este número é zero.")
}