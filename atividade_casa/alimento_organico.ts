import { produto_ecologico } from "./produto_ecologico";

class alimneto_organico implements produto_ecologico {
    nome: string;
    preco: number;
    data_validade: Date;
    ingredientes: string[];

    constructor(nome: string, preco: number, data_validade: Date, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco;
        this.data_validade = data_validade;
        this.ingredientes = ingredientes;
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

    get_data_validade(): Date {
        return this.data_validade;
    }

    set_data_validade(datav1: Date): void {
        this.data_validade = datav1;
    }

    get_ingredientes(): string[] {
        return this.ingredientes;
    }

    set_ingredientes(ingredientes1: string[]): void {
        this.ingredientes = ingredientes1;
    }

}