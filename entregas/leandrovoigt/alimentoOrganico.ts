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

    exibirDetalhes(): void {
        console.log(`Alimento Orgânico: ${this.nome}, Preço: R$${this.preco}, Validade: ${this.dataValidade.toDateString()}, Ingredientes: ${this.ingredientes.join(", ")}`);
    }
}