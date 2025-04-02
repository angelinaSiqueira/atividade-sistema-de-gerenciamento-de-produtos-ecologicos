import { ProdutoEcologico } from "./produtoEcologico"

export class AlimentoOrganico implements ProdutoEcologico{
    dataValidade: Date;
    ingredientes: String[];
    nome: String;
    preco: number;
    
    constructor(dataValidade: Date, ingredientes: String[], nome: String, preco: number){
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
        this.nome = nome;
        this.preco = preco;
    }

    exibir(): void{
        console.log("nome: " + this.nome + ", preco: " + this.preco + ", data de validade: " + this.dataValidade + ", ingredientes: " + this.ingredientes);
    }

}