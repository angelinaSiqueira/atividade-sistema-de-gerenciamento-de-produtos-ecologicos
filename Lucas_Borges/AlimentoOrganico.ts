import { produtoEcologico } from "./ProdutoEcologico";

export class AlimentoOrganico implements produtoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];


    constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }


    toString() :string {
       return  `Nome: ${this.nome}, ${this.preco} ,data de validade: ${this.dataValidade.toLocaleDateString()}, Ingredientes  ${this.ingredientes.join(",")}`
    }

    cadastrar(){
       return "foi cadastrado o produto: " + this.nome
    }
}



