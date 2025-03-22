import { produto_ecologico } from "./produto_ecologico";

class produto_limpeza_biodegradavel implements produto_ecologico {
    nome: string;
    preco: number;
    volume: number;

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

}