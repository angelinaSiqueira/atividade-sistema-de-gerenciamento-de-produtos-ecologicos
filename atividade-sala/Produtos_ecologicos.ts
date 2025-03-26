export interface ProdutoEcologico {
    nome: string;
    preco: number;
  }
  
  class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string;
  
    constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string) {
      this.nome = nome;
      this.preco = preco;
      this.dataValidade = dataValidade;
      this.ingredientes = ingredientes;
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
  }
  
  class ItemDecoracaoSustentavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    material: string;
    dimensoes: {
      largura: number;
      altura: number;
      profundidade: number;
    };
  
    constructor(
      nome: string,
      preco: number,
      material: string,
      largura: number,
      altura: number,
      profundidade: number
    ) {
      this.nome = nome;
      this.preco = preco;
      this.material = material;
      this.dimensoes = { largura, altura, profundidade };
    }
  }
  
  

  





