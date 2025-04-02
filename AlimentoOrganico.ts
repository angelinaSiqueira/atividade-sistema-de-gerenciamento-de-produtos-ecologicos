import { ProdutoEcologico } from "./ProdutoEcologico";

export class AlimentoOrganico implements ProdutoEcologico {
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
    toString(): string {
        return (`Alimento Orgânico: ${this.nome} Preço: R$${this.preco} Validade: ${this.dataValidade.toDateString()} Ingredientes: ${this.ingredientes}`);
    }
    cadastrar(): string {
        return 'Alimento Cadastrado' + this.nome;
    }
  }
  