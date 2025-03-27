import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];

    exibir(): string{
        return console.log(`nome prod: ${this.nome} preco: ${this.preco} dimencoes: ${this.dimensoes}`);
    }

    constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }
}
const ao = new AlimentoOrganico("maca", 4, new Date(), ["maca"]);

