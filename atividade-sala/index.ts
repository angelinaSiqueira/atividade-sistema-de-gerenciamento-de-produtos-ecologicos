//esse código é apenas os exemplos passados em sala para apredizado e não possui nada da atividade em sala

let numero:Number = 10;

console.log(numero);

let nome:String = "djonatan";

console.log(nome);

var pi = 3.14;

const idadeOld: Number = 20;

console.log(pi);

function saudacao(_nome: string,_idadeOld: number){
    console.log(`Olá me chamo ${nome} e tenho ${idadeOld} anos`);
}
var NomeUsuario = "Djonatan";
var idade = 18;
saudacao(NomeUsuario,idade);

//Objeto
const pessoa = {
    nome:"Alice",
    idade:15,
    cidade:"Salvador",
    apresentar: function ():String{
        return `Olá meu nome é ${this.nome}, e tenho ${this.idade}e sou da cidade de ${this.cidade}`
    }
}

console.log(pessoa.apresentar());

function somar(a: number, b: number): number {
 return a + b;
}

console.log(somar(3,4)); //Saída 7
//console.log(somar('3','4')); Erro de tipo de compilação 

//git commit -m "criado index"
//git push origin "nome da brach"