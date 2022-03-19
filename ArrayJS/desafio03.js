/*
    Um professor acidentalmente laçou 5 notas no sistema para um aluno
    10, 6, 8, 5.5 e 10

    para corrigir, remova a última nota e faça o cálculo da média correta
*/

const notas = [10, 6, 8, 5.5, 10];
notas.pop(10);
console.log(notas);
let mediaNotas = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;
console.log(mediaNotas);