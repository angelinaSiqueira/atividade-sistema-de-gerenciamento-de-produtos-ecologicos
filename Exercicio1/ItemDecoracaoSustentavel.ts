import { ProdutoEcologico } from "./ProdutoEcologico";

class ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome: string
    preco: number
    material: string               
    dimensoes: { largura:number, altura:number, profundidade:number}

    constructor( nome:string, preco:number, material:string, largura:number, altura:number, profundidade:number){
        this.nome = nome
        this.preco = preco
        this.material = material
        this.dimensoes = {largura,altura,profundidade}
    }

    exibirDetalhes(): void {
        console.log(`Produto:${this.nome}.`)
        console.log(`Preco:${this.preco}.`)
        console.log(`Material:${this.material}.`)
        console.log(`Dimensoes:${this.dimensoes.largura}cm x ${this.dimensoes.altura}cm x ${this.dimensoes.profundidade}cm`)
    }

    cadastrar(): void {
        
    }

}

const Grama = new ItemDecoracaoSustentavel("Grama", 25, "vegetal",45, 45, 5);
Grama.exibirDetalhes();