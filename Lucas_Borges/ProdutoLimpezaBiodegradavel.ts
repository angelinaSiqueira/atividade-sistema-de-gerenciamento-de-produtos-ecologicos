import { produtoEcologico } from "./ProdutoEcologico";

class ProdutoLimpezaBiodegradavel implements produtoEcologico{
    nome: string;
    preco: number;
    volume:number;

    constructor(nome:string,preco:number,volume:number){
        this.nome=nome;
        this.preco=preco;
        this.volume=volume;
        
        
    }

    toString(nome:string,preco:number,volume:number){
        console.log(`Nome: ${nome}, ${preco} ,volume: ${volume}`)
    }


}