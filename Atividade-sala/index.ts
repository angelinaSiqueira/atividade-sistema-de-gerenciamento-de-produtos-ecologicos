let numero:number =19;
console.log(numero);

let nome:string = "Davidson";
console.log(nome);

const pi:number = 3.14;
console.log(pi);

function saudacao(nome:string, idade:number){
    console.log(`Olá meu nome é ${nome} e tenho ${idade} anos`);
}
const nomeUsuario:string = "Rodrigo Faro";
const idade:number = 52;

saudacao(nomeUsuario,idade);

//Objeto
const pessoa = {
    nome: "Alice",
    idade: 15,
    cidade: "Peixoto",
    apresentar: function ():string{
        return `Olá meu nome é ${this.nome}, e tenho ${this.idade} e sou da cidade de ${this.cidade}`;
    }
}

console.log(pessoa.apresentar);

function somar(a: number, b: number): number {
    return a+b;
}
console.log(somar(3,4));
