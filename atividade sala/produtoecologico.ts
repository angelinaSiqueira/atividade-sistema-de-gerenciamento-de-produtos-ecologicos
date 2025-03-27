export interface ProdutoEcologico {
  nome: string;
  preco: number;
}


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

  exibirProduto(): void {
    console.log(`Alimento Orgânico: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco}`);
    console.log(`Validade: ${this.dataValidade.toLocaleDateString()}`);
    console.log(`Ingredientes: ${this.ingredientes.join(", ")}`);
  }
}


class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
  nome: string;
  preco: number;
  volume: number; 

  constructor(nome: string, preco: number, volume: number) {
    this.nome = nome;
    this.preco = preco;
    this.volume = volume;
  }

  exibirProduto(): void {
    console.log(`Produto de Limpeza Biodegradável: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco}`);
    console.log(`Volume: ${this.volume}L`);
  }
}


class ItemDecoracaoSustentavel implements ProdutoEcologico {
  nome: string;
  preco: number;
  material: string;
  dimensoes: { largura: number; altura: number; profundidade: number };

  constructor(nome: string, preco: number, material: string, dimensoes: { largura: number; altura: number; profundidade: number }) {
    this.nome = nome;
    this.preco = preco;
    this.material = material;
    this.dimensoes = dimensoes;
  }

  exibirProduto(): void {
    console.log(`Item de Decoração Sustentável: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco}`);
    console.log(`Material: ${this.material}`);
    console.log(`Dimensões (L x A x P): ${this.dimensoes.largura} x ${this.dimensoes.altura} x ${this.dimensoes.profundidade}`);
  }
}


const alimento = new AlimentoOrganico(
  'Arroz Orgânico',
  20.50,
  new Date(2025, 11, 31),
  ['Arroz Integral Orgânico']
);

const limpeza = new ProdutoLimpezaBiodegradavel(
  'Detergente Biodegradável',
  15.75,
  1.5
);

const decoracao = new ItemDecoracaoSustentavel(
  'Vaso de Plantas Sustentável',
  40.00,
  'Cerâmica',
  { largura: 15, altura: 20, profundidade: 15 }
);


alimento.exibirProduto();
limpeza.exibirProduto();
decoracao.exibirProduto();

