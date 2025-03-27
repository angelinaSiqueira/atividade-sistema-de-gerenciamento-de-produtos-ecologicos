import { ProdutoEcologico } from "./ProdutoEcologico";

export class ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome: string;
    preco: number;
    material: string;
    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number
    }

    constructor(nome: string, preco: number, material: string, dimensoes: { largura: number, altura: number, profundidade: number}){
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
    }

    exibir(){
        return `nome: ${this.nome}, preço: R$${this.preco},00 , material: ${this.material}, dimensões: ${this.dimensoes}`
    }

    cadastrar(){
        return "foi cadastrado com sucesso" + this.nome
    }
}