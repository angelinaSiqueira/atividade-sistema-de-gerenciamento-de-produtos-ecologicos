import { ProdutoEcologico } from "./produtoEcologico";

export class ItemDecoracaoSustentavel implements ProdutoEcologico{
    material: String;
    dimensoes: { 
        largura: number;
        altura: number;
        profundidade: number}
    nome: String;
    preco: number;

    constructor(material: String, dimensoes:{ largura: number, altura: number, profundidade: number }, nome: String, preco: number){
        this.material = material;
        this.dimensoes = dimensoes;
        this.nome = nome;
        this.preco = preco;
    }

    exibir(): void{
        console.log("nome: " + this.nome + ", preco: " + this.preco + ", material: " + this.material + ", dimensões: " + this.dimensoes);
    }

}