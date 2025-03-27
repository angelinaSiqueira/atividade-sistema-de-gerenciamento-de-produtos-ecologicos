import {ProdutoEcologico} from "./ProdutoEcologico";

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
  volume: number;
  nome: string;
  preco: number;
  
  constructor (volume: number, nome: string, preco: number) {
    this.volume = volume;
    this.nome = nome;
    this.preco = preco;
  }

  exibir() {
    console.log("Nome: " + this.nome + " / preço: " + this.preco + " / Volume: " + this.volume)
  }

  cadastrar():void{
    console.log("Foi cadastrado um Produto de Limpeza Biodegradavel " + this.nome)
  }
}
