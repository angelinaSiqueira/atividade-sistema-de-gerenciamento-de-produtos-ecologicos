import { produto_ecologico } from "./produto_ecologico";

class item_decoracao_sustentavel implements produto_ecologico {
    nome: string;
    preco: number;
    material: string;
    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number;
    }

    constructor(nome: string, preco: number, material: string, dimensoes: { largura: number, altura: number, profundidade: number }) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = dimensoes;
    }

    get_nome(): string {
        return this.nome;
    }

    set_nome(nome1: string): void {
        this.nome = nome1;
    }

    get_preco(): number {
        return this.preco;
    }

    set_preco(preco1: number): void {
        this.preco = preco1;
    }

    get_material(): string {
        return this.material
    }

    set_material(material1: string): void {
        this.material = material1;
    }

    get_dimensoes() {
        return this.dimensoes
    }

    set_dimensoes(dimensoes1: { largura: number, altura: number, profundidade: number }) {
        this.dimensoes = dimensoes1;
    }
}