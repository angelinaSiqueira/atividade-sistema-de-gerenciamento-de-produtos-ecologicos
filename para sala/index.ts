let numero:number = 10;
console.log(numero);

let nome : String = "angelina";
console.log (nome);

const pi:number = 3.14;
console.log (pi);

function saudacao(nome:String, idade:number){
    console.log (`ola eu me chamo $ {nome} e tenho ${idade}anos`);
}
const nomeUsuario: string = "victor"
const idadeUsuario: number = 15

const pessoa = {
    nome:"Alice",
    idade:15,
    cidade:"salvador",
    apresentar: function ():String{
    return `ola meu nome é ${this.nome}, e tenho ${this.idade} e sou da cidade de ${this.cidade} `
}
}

console.log(pessoa.apresentar())

function somar (a: number, b: number): number {
    return a + b
}

console.log(somar(3,4));