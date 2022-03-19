/*
Crie uma função que recebe como argumento o nome de um aluno.
verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice
caso o nome do aluno não esteja na lista, retorne uma mensgaem indicando que o aluno não foi encontrado
*/

const alunos = ['João','Juliana','Caio','Ana'];

const mediaDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno)=>{
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
           let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
            return listaDeNotasEAlunos[0][indice] + ', sua media é' + listaDeNotasEAlunos[1][indice]
        }
        else{
            return 'aluno não está cadastrado'
        }
}
console.log(exibeNomeNota('nemo'));