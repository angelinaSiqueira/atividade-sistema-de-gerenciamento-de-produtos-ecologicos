// Classe Organico implementando a interface ProdutoEcologico
class Organico implements ProdutoEcologico {
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

    cadastrar(): void {
        console.log(`Produto ${this.nome} cadastrado com sucesso!`);
    }

    exibir(): void {
        console.log(`Alimento Orgânico: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Data de validade: ${this.dataValidade.toLocaleDateString()}`);
        console.log(`Ingredientes: ${this.ingredientes.join(', ')}`);
    }
}
