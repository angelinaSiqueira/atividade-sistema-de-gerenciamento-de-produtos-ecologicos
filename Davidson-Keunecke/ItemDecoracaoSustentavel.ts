import { ProdutoEcologico } from "./ProdutoEcologico"

class ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome: string
    preco: number
    material: string
    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number
    }
    constructor(nome: string, preco: number, material: string){
        this.material = material
        this.nome = nome
        this.preco = preco
    }
}