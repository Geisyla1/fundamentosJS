function comparaNumeros(num1,num2){
    const primeiroFrase = criaPrimeiraFrase(num1,num2);
    const segundaFrase = criaSegundaFrase(num1,num2);

    return `${primeiroFrase} ${segundaFrase}`;
}
function criaPrimeiraFrase(num1,num2){
    let saoIguais = '';
    if(num1!==num2){
        saoIguais ='não';
    }
    return `Os números ${num1} ${num2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(num1,num2){
    const soma = num1 + num2;
    let resultadoQue10 = 'menor';
    let resultadoQue20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;
    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado10 = 'maior';
    }
    return `sua soma é ${soma}, que é ${resultadoQue10} que 10 e ${resultadoQue20} que é 20`;
}
console.log(comparaNumeros(20,20));

  /* const saoIguais = num1 === num2;
    
    const soma = num1 + num2;


     return saoIguais ? "são iguais": "não são iguais";
    if(saoIguais){
        return "são iguais";
    }
    return "Não são iguais";*/