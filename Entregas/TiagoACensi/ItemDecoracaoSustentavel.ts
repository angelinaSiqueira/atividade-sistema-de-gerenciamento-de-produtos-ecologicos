import { ProdutoEcologico } from "./ProdutoEcologico";

class ItemDecoracaoSusentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number;


    }
    exibir(): string{
        return console.log(`nome prod: ${this.nome} preco: ${this.preco} dimencoes: ${this.dimensoes}`);
    }
    
    constructor(nome: string, preco: number, dimensoes: { largura: number, altura: number, profundidade: number }) {
        this.nome = nome;
        this.preco = preco;
        this.dimensoes = dimensoes;


    }
}
const ids = new ItemDecoracaoSusentavel("guarda-chuva", 30,{largura:4, altura: 6, profundidade: 12} );