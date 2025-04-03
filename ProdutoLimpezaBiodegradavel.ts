import { ProdutoEcologico } from "./ProdutoEcologico";

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    nome:string;
    preco:number;
    volume:number;

    constructor(nome:string, preco:number, volume: number){
        this.nome=nome;
        this.preco= preco;
        this.volume= volume;

    }
    cadastrar(): void {
        console.log(`produto de limpeza: ${this.nome} cadastrado`);
    }
    exibirInfo(): void {
        console.log(`produto de limpeza: ${this.nome}`);
        console.log(`preco: ${this.preco}`);
        console.log(`volume : ${this.volume}`);
    }
}