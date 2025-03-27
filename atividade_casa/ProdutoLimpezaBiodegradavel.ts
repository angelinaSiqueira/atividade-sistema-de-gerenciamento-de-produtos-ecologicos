import { ProdutoEcologico } from "./ProdutoEcologico";

export class ProdutoLimezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;

    private static produtos: ProdutoLimezaBiodegradavel[] = [];

    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
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

    get_volume(): number {
        return this.volume;
    }

    set_volume(volume1: number): void {
        this.volume = volume1;
    }

    cadastrar(): void {
        if (ProdutoLimezaBiodegradavel.produtos.push(this)) {
            console.log(`Produto "${this.nome}" cadastrado`);
        }
        else {
            console.log(`falha ao cadastrar`);
        }

    }

    listar(): ProdutoLimezaBiodegradavel[] {
        for (const produto of ProdutoLimezaBiodegradavel.produtos) {
            console.log(`nome : ${this.nome}, preco: ${this.preco}, volume: ${this.volume}`)
        }
        return ProdutoLimezaBiodegradavel.produtos;
    }

}