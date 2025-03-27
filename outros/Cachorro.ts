import { Animal } from "./animal";

class Cachorro implements Animal {
    nome:string;
    idade:number;
    raca:string;

    constructor(nome:string, idade:number, raca:string){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    som():void{
        console.log("wuff, wuff; wau, wau 🐕");
    }
}

const meuDog = new Cachorro ("Rocky", 1, "Pastor-Alemão");
console.log(`Nome: ${meuDog.nome}`)
console.log(`Idade: ${meuDog.idade}`)
console.log(`Raca: ${meuDog.raca}`)
meuDog.som()