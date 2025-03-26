import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico{
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

    get getNome(): string {
        return this.nome;
    }

    get getPreco(): number{
        return this.preco;
    }

    get getDataValidade(): Date{
        return this.dataValidade;
    }

    get getIngredientes(): string[]{
        return this.ingredientes;
    }
}