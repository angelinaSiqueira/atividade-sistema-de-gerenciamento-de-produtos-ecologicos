import { Animal } from "./Animal";

class Cachorro implements Animal{
    nome: string;
    idade: number;
    raca: string;

    constructor(nome:string,idade:number,raca:string){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    som(): void {
        console.log("O cachorro faz au au");
    }
}

const cachorro = new Cachorro("Victor",5,"Pincher");
console.log(cachorro.som());