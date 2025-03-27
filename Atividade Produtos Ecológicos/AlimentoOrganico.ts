import {ProdutoEcologico} from "./ProdutoEcologico";

export class AlimentoOrganico implements ProdutoEcologico {
  nome: string;
  preco: number;
  dataValidade: Date;
  ingredientes: string[];
  
  constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string[]){
    this.dataValidade = dataValidade;
    this.ingredientes = ingredientes;
    this.nome = nome;
    this.preco = preco;
  }

  exibir(){
    console.log("Nome: " + this.nome + " / preço: " + this.preco + " / ingredientes: " + this.ingredientes + " / data de validade: " + this.dataValidade);
  }

  cadastrar():void{
    console.log("Foi cadastrado o Alimento " + this.nome);
  }

}