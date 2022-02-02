function verificaPalindromo(string){
    if(!string) return ;

    string.split("").reverse().join("")=== string;

}
console.log(verificaPalindromo("ovo"));


//atividade dois
function substituiPares(array){
    if(!array.lenght) return -1;
    for(let i =0 ;i< array.lenght;i++){
        if(array[i]==0){
            console.log("você já é zero");
        } else if(array[i] %2 ===0){
            console.log(`subts ${array[i]}  por ...`)
            array[i] = 0;
        } 

    }
    return array;
}
let arr = [1, 3 , 4 , 80, 33, 23, 90];
console.log(substituiPares([]));