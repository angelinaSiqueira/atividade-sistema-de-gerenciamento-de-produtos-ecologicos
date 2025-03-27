let numero:number = 10;
console.log(numero);

let nome:string = "Yuri";
console.log(nome);

const pi:number = 3.14;
console.log(pi);

function saudacao(nome:string, idade:number){
  console.log('Olá eu me chamo ${nome} e tenho ${idade} anos ');
}

const nomeUsuario:string = "Yuri";
const idade:number = 22;

saudacao(nomeUsuario, idade)

//Objeto
const pessoa = {
  nome: "Alice",
  idade: 15,
  cidade:"Salvador",
  apresentar: function ():string{
    return `Olá meu nome é ${this.nome}, e tenho ${this.idade} e sou da cidade de ${cidade}`;
  }
}

console.log(pessoa.apresentar());

funcion somar(a: number, b: number): number{
  return a+b;
}
console.log(somar(3,4)); //saida 7
//console.log(somar('3','4')); //Erro de tipo em tempo de compilação
