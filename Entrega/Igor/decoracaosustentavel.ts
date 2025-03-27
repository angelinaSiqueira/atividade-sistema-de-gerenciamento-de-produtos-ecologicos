// Classe DecoracaoSustentavel implementando a interface ProdutoEcologico
class DecoracaoSustentavel implements ProdutoEcologico {
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

    cadastrar(): void {
        console.log(`Produto ${this.nome} cadastrado com sucesso!`);
    }

    exibir(): void {
        console.log(`Item de Decoração Sustentável: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Material: ${this.material}`);
        console.log(`Dimensões: Largura = ${this.dimensoes.largura} cm, Altura = ${this.dimensoes.altura} cm, Profundidade = ${this.dimensoes.profundidade} cm`);
    }
}
