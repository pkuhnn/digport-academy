// exercicios w3schools

//let x = 5;
/*let y = '8';
let z = x + y;
console.log(z)*/

/*const y = x++;
console.log(y);*/

/*let x = 100 + 50 * 3
console.log(x)*/

/*const y = x += 10;
console.log(y)*/


// exercicios aula 
// EXERCICIO 1 - CALCULO SALARIO

    /*
    let salarioPorHora = 30;
    let horasTrabalhadas = 160;

    let salarioFinal = salarioPorHora * horasTrabalhadas;

    console.log(salarioFinal);
    */

// EXERCICIO 2 - DESCONTO EM PRODUTO

    /*
    let precoOriginal = 200;
    let desconto = precoOriginal * 0.10;

    let precoFinal = precoOriginal - desconto;

    console.log(precoFinal) // 180
    */

// EXERCICIO 3 - VERIFICACAO DE MAIORIDADE

    /*
    let idade = 17;
    let maiorDeIdade = idade >= 18;

    console.log(maiorDeIdade) // false
    */ 

// EXERCICIO 4 - PAR OU IMPAR

/*
    Explicação:
        numero % 2: O operador % calcula o resto da divisão de numero por 2.
        if (numero % 2 === 0): Esta condição verifica se o resto é igual a 0.
        return "par": Se a condição for verdadeira (resto 0), a função retorna "par".
        else { return "ímpar" }: Caso contrário (resto diferente de 0), a função retorna "ímpar". 
*/

    /*
    function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
    }

    console.log(verificarParImpar(22))
    console.log(verificarParImpar(21))
    */

    /*
    let quantidadeDeItens = 22;
    let ehPar = quantidadeDeItens % 2 === 0;

    console.log(ehPar)
    */

// EXERCICIO 5 - COMPARACAO COM == E ===

    // No sistema de uma loja online, os preços dos produtos podem vir de diferentes fontes. As vezes, o valor vem como número (50), outras vezes como texto (50).
    // Um desenvolvedor está criando uma verificação para garantir que valores com tipos diferentes não sejam tratados como iguais, para evitar bugs em promoções.
    // Qual operador ele deve usar para garantir que valores com tipos diferentes (número e string) não sejam considerados iguais?
    
    
// EXERCICIO 6 - LARISSA E A FESTA

/*
function aLarissaVaiPraFesta(texto) {
    let estaChovendo = true;
    let temGuardaChuva = false;
    if (estaChovendo = true AND temGuardaChuva = false)
        return "não vai";
}

console.log(aLarissaVaiPraFesta)
*/

let estaChovendo = true;
let temGuardaChuva = false; 

let vaiSair = !estaChovendo && temGuardaChuva

console.log(vaiSair) //false