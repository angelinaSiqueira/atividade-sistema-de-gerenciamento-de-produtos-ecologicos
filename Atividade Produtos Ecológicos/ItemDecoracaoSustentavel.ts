import {ProdutoEcologico} from "./ProdutoEcologico";

class ItemDecoracaoSustentavel implements ProdutoEcologico {
  material: string;
  nome: string;
  preco: number;
  dimensoes: { largura: number, altura: number, profundidade: number}

  constructor (material: string, nome: string, preco: number, dimensoes: { largura: number, altura: number, profundidade: number}) {
    this.material = material;
    this.nome = nome;
    this.preco = preco;
    this.dimensoes = dimensoes;
  }

  exibir() {
    console.log("Nome: " + this.nome + " / preço: " + this.preco + " / Material: " + this.material + " / dimensão: " + this.dimensoes)
  }

  cadastrar():void{
    console.log("Foi cadastrado um Item de Decoracao Sustentavel" + this.nome)
  }
}
