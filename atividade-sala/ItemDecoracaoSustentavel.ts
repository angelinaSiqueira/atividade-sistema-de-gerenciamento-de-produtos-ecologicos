import { ProdutoEcologico } from "./ProdutoEcologico";

export class ItemDecoracaoSustentavel implements ProdutoEcologico{
    material: string;
    dimensoes:{
        largura: number;
        altura: number;
        profundidade: number;
    }
    nome: string;
    preco: number;

    constructor(material: string, dimensoes:{largura: number; altura: number; profundidade: number;}, nome: string, preco: number){
        this.material = material;
        this.dimensoes = dimensoes;
        this.nome =nome;
        this.preco = preco;
    }


    exibir(){
        console.log("Nome: "+ this.nome + ", preço: " + this.preco + ", material: " + this.material + ", dimensoões: " + this.dimensoes)
    }

    cadastrar(): void{
        console.log("Produto cadastrado com sucesso: " + this.nome)
    }

}