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

    exibirDetalhes(): void {
        console.log(`Item de Decoração Sustentável: ${this.nome}, Preço: R$${this.preco}, Material: ${this.material}, Dimensões: ${this.dimensoes.largura}x${this.dimensoes.altura}x${this.dimensoes.profundidade}`);
    }
}

// Exemplo de criação de instâncias e exibição de detalhes
const alimento = new AlimentoOrganico("Tomate Orgânico", 8.5, new Date(2025, 5, 10), ["Tomate"]);
const limpeza = new ProdutoLimpezaBiodegradavel("Detergente Eco", 12.9, 500);
const decoracao = new ItemDecoracaoSustentavel("Vaso de Bambu", 45.0, "Bambu", { largura: 10, altura: 15, profundidade: 10 });

// Invocação dos métodos
alimento.exibirDetalhes();
limpeza.exibirDetalhes();
decoracao.exibirDetalhes();