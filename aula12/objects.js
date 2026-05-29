const pessoa = {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira",
    apresentar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}

console.log(pessoa.profissao);
pessoa.apresentar();