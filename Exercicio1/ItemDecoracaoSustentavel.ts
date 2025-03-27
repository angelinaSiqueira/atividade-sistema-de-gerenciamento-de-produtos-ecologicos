import { ProdutoEcologico } from "./ProdutoEcologico";

class ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome: string
    preco: number
    material: string               
    dimensoes: { largura:number, altura:number, profundidade:number}

    constructor( nome:string, preco:number, material:string, dimensoes:{ largura:number, altura:number, profundidade:number}){
        this.nome = nome
        this.preco = preco
        this.material = material
        this.dimensoes = dimensoes
    }

    exibirDetalhes(): void {
        console.log(`Produto:${this.nome}.`)
        console.log(`Preco:${this.preco}.`)
        console.log(`Material:${this.material}.`)
        console.log(`Dimensoes:${this.dimensoes}.`)
    }

    cadastrar(): void {
        
    }

}

const Grama = new ItemDecoracaoSustentavel("Grama", 25, "vegetal",dimensoes);
Grama.exibirDetalhes();