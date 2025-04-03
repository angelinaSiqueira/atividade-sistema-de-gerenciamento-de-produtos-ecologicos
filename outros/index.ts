let numero: number = 10;
console.log(numero);

let nome: string = "Jonas";
console.log(nome);

const pi: number = 3.14;
console.log(pi);

function saudacao(nome: string, idade: number) {
    console.log(`Ola eu me chamo ${nome} e tenho ${idade} anos`)
}
const nomeUsuario: string = "Jonas";
const idade: number = 18;
saudacao(nomeUsuario, idade);

//objeto
const pessoa = {
    nome: "Augustinho",
    idade: 26,
    cidade: "Blumenau",
    apresentar:function ():string{
        return `Ola meu nome é ${this.nome}, e tenho ${this.idade} anos e sou da cidade de ${this.cidade}`
    }
}
console.log(pessoa.apresentar());

function somar(a:number, b:number):number{
    return a+b;
}
console.log(somar(3,4));
