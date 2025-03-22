import { produto_ecologico } from "./produto_ecologico";

class alimneto_organico implements produto_ecologico {
    nome: string;
    preco: number;
    data_validade: Date;
    ingrediente: string[];

    constructor(nome: string, preco: number, data_validade: Date, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.data_validade = data_validade;
        this.ingrediente = ingredientes;
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

}