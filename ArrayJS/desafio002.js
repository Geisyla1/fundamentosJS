
/*
    Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno:10,6,8
    para corrigir, adicione a nota 7 e faça o cálculo da média correta
*/

const notas = [10,6,8];
notas.push(7);//método de array, já é do js//o dado inserido com este método entra sempre no final do array
const mediaNotas =(notas[0]+notas[1]+notas[2]+notas[3])/notas.length;
console.log(mediaNotas);