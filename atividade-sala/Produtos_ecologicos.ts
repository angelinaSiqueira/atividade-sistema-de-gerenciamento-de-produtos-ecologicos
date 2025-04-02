export interface ProdutoEcologico {
    nome: string;
    preco: number;
  }
  
  export class AlimentoOrganico implements ProdutoEcologico {
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
   
  
  export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;
  
    constructor(nome: string, preco: number, volume: number) {
      this.nome = nome;
      this.preco = preco;
      this.volume = volume;
    }
  }
  
  export class ItemDecoracaoSustentavel implements ProdutoEcologico {
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
  
  const alimento = new AlimentoOrganico("Maça",4.32,new Date("2025-05-01"),"Maça");
  const produtoLimpeza = new ProdutoLimpezaBiodegradavel("Detergente Bio", 12.99, 500);
  const itemDecoracao = new ItemDecoracaoSustentavel("Vaso Reciclado", 25.5, "Cerâmica", 10, 15, 10);

console.log(alimento, produtoLimpeza, itemDecoracao);

  

  





