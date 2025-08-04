/* 
Exercicio 1 - Julia vai pra Disney? 

Julia está planejando suas férias e precisa decidir para onde vai viajar, dependendo do saldo da sua conta bancária. Sua decisão seerá feita com base nos seguintes critérios: 
    a) se Julia tiver 15.000 ou mais na conta, ela viajará para Disney.
    b) se o saldo for menor do que 15.000, mas pelo menos de 5.000, ela optará por visitar sua cidade natal em MG
    c) se o saldo for inferior a 5.000, ela passará um final de semana no litoral.
*/

/*
    let saldoConta = 18000;

    if (saldoConta >= 15000) { 
        console.log("Partiu Disney");
    }
    else if (saldoConta >= 5000) {
        console.log("Bora pra Minas");
    }
    else {
        console.log("Sem férias esse ano, bora litoral")
    }
*/

/* 
Exercicio 2 - Nota do Semestre

Faça um código que defina se o aluno foi aprovado ou não, baseado na sua nota e dê o seguinte resultado: 
    A mensagem "Aprovado", se a nota alcançada for maior ou igual a 7;
    A mensagem "Reprovado", se a média for menor do que 7.
*/
/*
    let notaAluno = 8;

    if (notaAluno >= 7) {
        console.log("Parabéns, aprovado!");
    }
    else {
        console.log("Reprovado.");
    }
*/

/*
Exercicio 3 - Decisão de Compra
Carlos possui um saldo em conta.
Se tiver mais do que 10.000, comprará um pc novo.
Se tiver entre 3.000 e 9.999, comprará um smartphone.
Se tiver menos do que 3.000, ele irá economizar mais. 

    let saldoCarlos = 3500;

    if (saldoCarlos >= 10000) {
        console.log("Carlos vai comprar um computador")
    }
    else if (saldoCarlos >= 3000) {
        console.log("Carlos vai comprar um smartphone")
    }
    else {
        console.log("Vai guardar dinheiro, Carlos...")
    }
*/

/*
Exercicio 4 - Medalha
Ana quer saber qual medalha vai ganhar em uma competição. 
Se terminar em menos de 1min, ouro
Se terminar entre 1min e 2min, prata
Se demorar mais de 2min, bronze

    let tempoAna = 1;

    if (tempoAna <= 1) {
        console.log("É ourooo")
    }
    else if (tempoAna <= 2) {
        console.log("É prata!")
    }
    else {
        console.log("Medalha de Bronze")
    }
*/

/*
Exercicio 5 - Dia da Semana
Dado um numero de 1 a 7, indique qual é o dia da semana, começando com domingo.

    let diaDaSemana = 6;

    switch (diaDaSemana) {
        case 1:
            console.log("Domingo");
            break;
        case 2: 
            console.log("Segunda");
            break;
        case 3: 
            console.log("Terça");
            break;
        case 4: 
            console.log("Quarta");
            break;
        case 5: 
            console.log("Quinta");
            break;
        case 6: 
            console.log("Sexta");
            break;
        case 7: 
            console.log("Sábado");
            break;
        default:
            console.log("Dia Inválido");
    }
*/

/*
Exercicio 6 - Classificação da Nota
Letra representando uma nota, indique: 
A: Excelente
B: Bom
C: Regular
D: Ruim
F: Insuficiente

    let nota = 'B';

    switch (nota) {
        case 'A':
            console.log("Excelente");
            break;
        case 'B':
            console.log("Bom");
            break;
        case 'C':
            console.log("Regular");
            break;
        case 'D':
            console.log("Ruim");
            break;
        case 'F':
            console.log("Péssimo, vai estudar");
            break;
        default:
            console.log("Nota Inválida");
    }
*/

/* 
Exercicio 7 - Estacoes do Ano
Dado um numero de 1 a 4, indique qual estacao do ano corresponde: 
1: Primavera
2: Verao
3: Outono
4: Inverno

    let estacaoDoAno = 2;

    switch (estacaoDoAno) {
        case 1:
            console.log("Primavera");
            break;
        case 2:
            console.log("Verão");
            break;
        case 3:
            console.log("Outono");
            break;
        case 1:
            console.log("Inverno");
            break;
        default:
            console.log("Número inválido (:")
    }
*/

/*
Exercicio 8 - Classificacao por idade
Tipo de cliente e correspondente desconto em uma loja
Bronze: 5%
Prata: 10%
Ouro: 15%
Platina: 20%
*/

    let tipoCliente = "Ouro";

    switch (tipoCliente) {
        case "Bronze": 
            console.log("Desconto de 5%");
            break;
        case "Prata": 
            console.log("Desconto de 10%");
            break;
        case "Ouro": 
            console.log("Desconto de 15%");
            break;
        case "Platina": 
            console.log("Desconto de 20%");
            break;
        default: 
            console.log("Tipo de cliente inválido.")
    }