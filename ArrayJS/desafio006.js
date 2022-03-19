/*
    Haverá uma palestra sobre padrões de projetos para as alunas das salas de javascrpit e python. Junte ambas as salas em uma única lista que exiba todas as alunas
*/

const salaPython = ['Roberta','Layone','Manu','Ana'];
const salaJavascript =['Geisyla','Julha','Bruna','jade','carol'];

const salaUnificada = salaPython.concat(salaJavascript);
console.log(salaUnificada);