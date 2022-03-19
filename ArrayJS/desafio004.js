/*
    Divida os alunos da sala abaixo em duas listas com a mesma quantidade de alunos,'joão','juliana','Ana','Caio','lara'
,'Marjorie','Carlos','Paulo','Bia','vivian','Isabela','Vinicius','Renan','Renata','Daisy','Camilo'

*/

const alunos= ['joão','juliana','Ana','Caio','lara'
,'Marjorie','Carlos','Paulo','Bia','vivian','Isabela','Vinicius','Renan','Renata','Daisy','Camilo'];
const sala1 = alunos.slice(0,alunos.length/2);
const sala2 = alunos.slice(alunos.length/2);

console.log(`Alunos na sala 01 ${sala1}`);
console.log(`Alunos na sala 02 ${sala2}`);