let numero:number=10;
console.log(numero);
let nome:String= "Daniel";
console.log(nome);
const pi:number=3.14;
console.log(pi);
function saudacao(nome:String, idade:number){
    console.log(`Olá eu me chamo ${nome} e tenho ${idade} anos`)
}
const nomeUsuario:String="Daniel";
const idade:number=22;
saudacao(nomeUsuario,idade);
saudacao(nomeUsuario,idade);
const pessoa={
    nome:"Alice",
    idade:15,
    cidade:"Salvador",
    apresentar:function():string{
        return `Olá meu nome é ${this.nome}, e tenho ${this.idade} e sou da cidade de ${this.cidade}`

    }}
console.log (pessoa.apresentar());
function somar(a: number,b: number): number{
    return a +b;

}
console.log(somar(3,4));

