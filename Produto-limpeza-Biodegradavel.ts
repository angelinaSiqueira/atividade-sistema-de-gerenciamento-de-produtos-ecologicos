import {Produtoecologico} from "./Prdotudo-ecologico";

export class ProdutolimpezaBiodegradavel{
    volume:number
    nome:String
    preco: number


    constructor(volume:number, nome:string, preco:number){
        this.volume = volume;
        this.nome = nome;
        this.preco = preco;
    }

    exibir(){
        console.log("Nome:" + this.nome + "/ preço: " + this.preco + "/ volume: " + this.volume)
    }
    cadastrar():void{
   console.log("foi cadastrado o produto" + this.nome)
    }
}