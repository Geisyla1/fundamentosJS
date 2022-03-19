/*
    Crie uma lista de chamada com os seguintes alunos

'joão','Ana','Lara','Marjorie','Leo'

porém, a Ana e o Caio mudaram de escola e o Rodrigo entrou nesta sala. Atualize a lista
*/


const listaChamada = ['João','Ana','Caio','Lara','Marjorie','Leo'];

listaChamada.splice(1,2,'Rodrigo');
//segundo parâmentro é a quantidade que vou alterar

console.log(listaChamada);
