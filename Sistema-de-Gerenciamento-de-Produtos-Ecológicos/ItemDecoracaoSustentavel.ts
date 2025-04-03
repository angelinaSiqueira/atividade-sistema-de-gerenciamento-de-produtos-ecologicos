import { ProdutosEcologicos } from "./ProdutoEcologico";

class ItemDecoracaoSustentavel implements ProdutosEcologicos {
    nome: string;
    preco: number;
    material: string;
    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number;
    }
    constructor(nome: string, preco: number, material: string, dimensoes: { largura: number; altura: number; profundidade: number }) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
    }
    cadastrar(): void {
        console.log(`
            Cadastrando Item de Decoração:
            Nome: ${this.nome}
            Preço: R$${this.preco.toFixed(2)}
            Material: ${this.material}
            Dimensões: ${this.dimensoes.largura}x${this.dimensoes.altura}x${this.dimensoes.profundidade}cm
            `);
    }
    exibir(): void {
        console.log(`ITEM DE DECORAÇÃO SUSTENTÁVEL:
            Nome: ${this.nome}
            Preço: R$${this.preco.toFixed(2)}
            Material: ${this.material}
            Dimensões: ${this.dimensoes.largura}x${this.dimensoes.altura}x${this.dimensoes.profundidade}cm`);
    }
}

const vaso = new ItemDecoracaoSustentavel(
    "Vaso de Bambu",
    45.00,
    "Bambu",
    { largura: 15, altura: 25, profundidade: 15 }
);

vaso.cadastrar();
vaso.exibir();