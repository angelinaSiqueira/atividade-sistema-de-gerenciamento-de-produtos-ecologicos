import { Produto_Ecologico } from "./produto_ecologico";

class AlimentoOrganico implements Produto_Ecologico{
  nome: string;
  preco: number;
  data_validade: Date
  ingredientes:string[]

  constructor(nome:string,preco:number,date_validade:Date,ingerdientes:string[]){
    this.nome = nome
    this.preco = preco
    this.data_validade = date_validade
    this.ingredientes = ingerdientes
  }
  exibir(): void {
    console.log(`produto:${this.nome}`);
    console.log(`preco:${this.preco}`)
    console.log(`data de validade:${this.data_validade.toDateString()}`)
    console.log(`ingredientes ${this.ingredientes}`)
  }
  cadastrar(): void {
    console.log(`O alimento foi cadastrado`)
  }
}

const banana = new AlimentoOrganico("banana",1,new Date("2025-3-30"),["banana"])
banana.cadastrar()
banana.exibir()