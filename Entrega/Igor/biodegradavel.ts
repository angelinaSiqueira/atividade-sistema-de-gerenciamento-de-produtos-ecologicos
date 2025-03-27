// Classe Biodegradavel implementando a interface ProdutoEcologico
class Biodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;

    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }

    cadastrar(): void {
        console.log(`Produto ${this.nome} cadastrado com sucesso!`);
    }

    exibir(): void {
        console.log(`Produto de Limpeza Biodegradável: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Volume: ${this.volume}L`);
    }
}
