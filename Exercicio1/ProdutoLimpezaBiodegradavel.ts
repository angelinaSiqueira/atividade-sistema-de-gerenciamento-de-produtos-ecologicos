import { ProdutoEcologico } from "./ProdutoEcologico";

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    nome: string;
    preco: number;
    volume: number;

    constructor(nome:string,preco:number,volume:number){
        this.nome = nome
        this.preco = preco
        this.volume = volume
    }

    exibirDetalhes(): void {
        console.log(`Produto:${this.nome}.`)
        console.log(`Preco:${this.preco}.`)
        console.log(`Volume:${this.volume}.`)
    }

    cadastrar(): void {
        console.log(`O produto ${this.nome} foi cadastrado!`)    
    }

}

const OMO = new ProdutoLimpezaBiodegradavel("OMO",25,3);
OMO.exibirDetalhes();
OMO.cadastrar();