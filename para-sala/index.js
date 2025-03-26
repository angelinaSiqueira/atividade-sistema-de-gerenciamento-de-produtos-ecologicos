var numero = 15;
console.log("numero");
var nome = "Kauan";
console.log("nome");
function saudacao(nome, idade) {
    console.log("Ola meu nome \u00E9 $(nome) e tenhop $(idade) anos");
}
var pessoa = {
    nome: "Alice",
    idade: 15,
    cidade: "Salvador",
    apresentar: function () {
        return "Ola meu nome \u00E9 $(this.nome), e tenho $(this.idade) e sou da cidade de $(this.cidade)";
    }
};
console.log(pessoa.apresentar());
function somar(a, b) {
    return a + b;
}
