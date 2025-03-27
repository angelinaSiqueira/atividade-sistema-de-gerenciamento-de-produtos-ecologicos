import {ProdutoEcologico} from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico {
  dataValidade: Date;
  ingredientes: string[];
  nome: string;
  preco: number;
  
  constructor (dataValidade: Date, ingredientes: string[], nome: string, preco: number){
    this.dataValidade = dataValidade;
    this.ingredientes = ingredientes;
    this.nome = nome;
    this.preco = preco;
  }

  exibir(){
    console.log("Nome: " + this.nome + " / preço: " + this.preco + " / ingredientes: " + this.ingredientes + " / data de validade: " + this.dataValidade)
  }

  cadastrar():void{
    console.log("Foi cadastrado um Alimento Organico " + this.nome)
  }
}
