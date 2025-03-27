import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];

    exibir(): void {
        console.log(`nome prod: ${this.nome} preco: ${this.preco} data: ${this.dataValidade} ingredientes ${this.ingredientes}`);
    }
    inserir(): void{
        console.log("O alimento organico foi inserido")
    }

    constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }
}
const ao = new AlimentoOrganico("maca", 4, new Date(), ["maca"]);
ao.inserir;
ao.exibir;
