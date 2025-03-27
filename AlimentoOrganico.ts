import { ProdutoEcologico } from "./ProdutoEcologico";

export class AlimentoOrganico implements ProdutoEcologico{
    dataValidade: Date
    ingredientes: string[]
    nome: string;
    preco: number;

    constructor(dataValidade: Date, ingredientes: string[], nome: string, preco: number){
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
        this.nome = nome;
        this.preco = preco;
    }

    exibir(){
        return `nome: ${this.nome}, preço: R$${this.preco},00 , validade: ${this.dataValidade}, ingredientes: ${this.ingredientes}`
    }
    
    cadastrar(){
        return "foi cadastrado com sucesso" + this.nome
    }
}