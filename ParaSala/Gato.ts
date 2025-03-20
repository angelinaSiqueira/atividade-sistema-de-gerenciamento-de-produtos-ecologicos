import { Animal } from "./Animal";

class Gato implements Animal{
    nome: string;
    idade: number;
    raca: string;

    constructor(nome:string,idade:number,raca:string){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    som(): void {
        console.log("O gato faz miau");
    }
}

const gato = new Gato("Jonas",13,"Vira-lata");
console.log(gato.som());