import { conta_bancaria } from "./conta_bancaria";

let numero: number = 10;
console.log(numero);

let nome: string = "cleiton rasta";
console.log(nome);

const pi: number = 3.14;
console.log(pi);

function saudacao(nome:string, idade:number){
    console.log(`Ola meu nome é ${nome} tenho ${idade} anos`);
}

const pessoa ={
    nome: "Geislon",
    idade: 12,
    cidade: "Lontras",
    apresentar: function ():string{
        return `Olá meu nome é ${this.nome}, e tenho ${this.idade} e sou da cidade de ${this.cidade}`
    }
}

console.log(pessoa.apresentar());

function somar(a: number, b:number): number {
    return a+b;
}

console.log(somar(2,4));

class conta_corrente implements conta_bancaria{
    
}