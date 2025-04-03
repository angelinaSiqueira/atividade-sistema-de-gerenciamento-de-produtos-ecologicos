import { Animal } from "./animal";

class Gato implements Animal {
    nome: string;
    idade: number;
    cor: string;

    constructor(nome: string, idade: number, cor: string) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }

    som(): void {
        console.log("Miauuuuuuuuuuuuuuuuuuuuuuuuu");
    }
}

const meuCat =new Gato("Fumaça", 2, "Preto");
console.log(`Nome:${meuCat.nome}`)
console.log(`Idade:${meuCat.idade}`)
console.log(`Cor:${meuCat.cor}`)
meuCat.som();
