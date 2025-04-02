
import { Produtoecologico } from "./Prdotudo-ecologico";

export class itemdecoracao implements Produtoecologico{
    material:string
    dimensoes:{
        largura:number;
        altura: number;
        profundidade: number;
    }
    nome:string
    preco:number

    constructor(material: string, dimensoes:{largura:number; altura:number; profundidade:number;}, nome: string, preco: number){
        this.material = material;
        this.dimensoes = dimensoes;
        this.nome = nome;
        this.preco = preco;
    }
    exibir(){
        console.log("Nome:" + this.nome + "/ preço: " + this.preco + "/ dimensoes: " + this.dimensoes + "/ material: " + this.material)
    }
    cadastrar():void{
   console.log("foi cadastrado o item" + this.nome)
    }

}