import { produtoEcologico } from "./produtoEcologico";

export class ProdutoLimpezaBiodegradavel implements produtoEcologico{
    nome: string;
    preco: number;
    volume:number;

    constructor(nome:string,preco:number,volume:number){
        this.nome=nome;
        this.preco=preco;
        this.volume=volume;


    }

    toString(){
        return `Nome: ${this.nome}, ${this.preco} ,volume: ${this.volume}`
    }

    cadastrar(){
        return "Foi cadastrado o produto: " + this.nome
    }


}