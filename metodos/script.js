//MÉTODO MAP
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr,thisArg) {
    return arr.map(function(item) {
       return item * this.value;
    }, thisArg);
}
const nums = [1,2];

console.log('this->maçã', mapComThis(nums,maca));

console.log('this->laranja', mapComThis(nums,laranja));

//Map sem o this
 function mapSemThis(arr){
        return arr.map(function(item){
         return item * 2;
     });
 }
 const nums =[2, 4, 6, 8, 10];

 console.log(mapSemThis(nums));

 //Método filter
 function filtraPares(arr){
     return arr.filter(callback);
 }

 function callback(item){
     return item % 2 ===0;
 }

 const meuArray = [1, 23, 55, 67, 30, 2, 4];

 console.log(filtraPares(meuArray));


//Método reduce, primeiro tem valor inicial setado

function somaNumeros(arr){
   return arr.reduce(function(prev,current){
        return prev + current;
    });
}

const arr = [1, 2];

console.log(somaNumeros());

//segundo exercício da lista

const lista = [
    {
        nome: 'sabão em pó',
        preco:30
    },
    {
        nome:'cereal',
        preco:12
    },
    {
        nome:'toalha',
        preco:30,
    }
];

const saldoDisponivel = 100;
function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev, current){
        return prev - current.preco}, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel,lista));