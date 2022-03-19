const livros = require('./listalivros');

const menorValor = require('./menorValor');

for(let atual = 0; atual<livros.length - 1;atual++){
    let menor = menorValor(livros,atual);

    let livroAtual = livros[atual];
    console.log("O livro atual é ", livros[atual]);
    let livroMenorPreco = livros[menor];
    console.log("O livro de menor preco é ",livros[menor]);

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}
console.log(livros);