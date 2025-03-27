// Classe que representa um produto de limpeza biodegradável
class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number; //é tudo em ml

    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }

    exibirDetalhes(): void {
        console.log(`Produto de Limpeza Biodegradável: ${this.nome}, Preço: R$${this.preco}, Volume: ${this.volume}ml`);
    }
}