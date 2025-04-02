import { ProdutoEcologico } from "./produtoEcologico"

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    volume: number;
    nome: String;
    preco: number;

    constructor(volume: number, nome: String, preco: number){
        this.volume = volume;
        this.nome = nome;
        this.preco = preco;
    }

    exibir(): void{
        console.log("nome: " + this.nome + ", preco: " + this.preco + ", volume: " + this.volume);
    }

}