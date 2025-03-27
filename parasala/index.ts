let numero:number = 10;
console.log(numero);

let nome:string = "Gui";
console.log(nome);

const pi:number = 3.14
console.log(pi);

//sem retorno
function saudaucao(nome:string, idade:number){
    console.log("Ola eu me chamo ${nome} e tenho ${idade} anos")
}

const nomeUsuario:string = "gui"
const idade:number = 17;
saudaucao(nome, idade);

const pessoa = {
    nome:"gui",
    idade: 17,
    cidade: "apiúna",
    apresentar: function():string{
        return 'OLA MEU NOME É ${this.nome}, e tenho ${this.idade} anos, e sou da cidade de ${this.cidade}' 
    }
}

console.log(pessoa.apresentar());

function somar (a:number, b:number): number{
    return a+b;

}

console.log(somar(3,4));