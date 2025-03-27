import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico {
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

    exibirDetalhes(): void{
        console.log(`Alimento Orgânico: ${this.nome}.`);
        console.log(`Preço: R$${this.preco}.`);
        console.log(`Validade: ${this.dataValidade.toDateString()}.`);
        console.log(`Ingredientes: ${this.ingredientes}.`);
    }

    cadastrar(): void {
        
    }

}

const Banana = new AlimentoOrganico("Banana",1,new Date(2025-3-30),["banana"]);
Banana.exibirDetalhes();

