
let numero : number = 15
console.log(`numero`);

let nome : String = "Kauan"
console.log(`nome`);

function saudacao(nome:string, idade:number){
    console.log(`Ola meu nome é $(nome) e tenhop $(idade) anos`);
}

const pessoa = {
    nome:"Alice",
    idade:15,
    cidade:"Salvador",
    apresentar: function():string{
        return `Ola meu nome é $(this.nome), e tenho $(this.idade) e sou da cidade de $(this.cidade)`
    }
    
    
}
console.log(pessoa.apresentar());

function somar(a: number, b:number): number {
    return a + b;
}