let numero:number=10;
console.log(numero);

let nome:string= "Lucas";
console.log(nome)

const pi:number=3.14;
console.log(pi)

function saudacao(nome:string,idade:number){
    console.log(`Olá, meu nome é ${nome} e eu tenho ${idade}`)
}

const pessoa ={
    nome:"Lucas",   
    idade: 17,
    cidade:"Ibirama",
    apresentar :function ():string{
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} e sou da cidade ${this.cidade}`
    }
}

console.log(pessoa.apresentar())

function somar(a:number,b:number){
    return a+b
}

console.log(somar(3,4))