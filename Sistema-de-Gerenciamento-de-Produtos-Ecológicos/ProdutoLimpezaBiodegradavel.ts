import { ProdutosEcologicos } from "./ProdutoEcologico";

class ProdutoLimpezaBiodegradavel implements ProdutosEcologicos {
    nome: string;
    preco: number;
    volume: number;
    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }
    cadastrar(): void {
        console.log(`
            Cadastrando Produto de Limpeza:
            Nome: ${this.nome}
            Preço: R$${this.preco.toFixed(2)}
            Volume: ${this.volume}ml
            `);
    }
    exibir(): void {
        console.log(`PRODUTO DE LIMPEZA BIODEGRADÁVEL:
            Nome: ${this.nome}
            Preço: R$${this.preco.toFixed(2)}
            Volume: ${this.volume}ml`
        )
    }
}

const detergente = new ProdutoLimpezaBiodegradavel(
    "Detergente Eco",
    12.90,
    500,
);

detergente.cadastrar();
detergente.exibir();