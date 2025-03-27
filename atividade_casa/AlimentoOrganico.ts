import { ProdutoEcologico } from "./ProdutoEcologico";

export class AlimentoOrganico implements ProdutoEcologico {
    nome: string;
    preco: number;
    data_validade: Date;
    ingredientes: string[];

    static alimentos: AlimentoOrganico[] = [];

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

    cadastrar(): void {
        if (AlimentoOrganico.alimentos.push(this)) {
            console.log(`Produto "${this.nome}" cadastrado`)
        }
        else {
            console.log(`falha ao cadastrar`)
        }
    }

    listar(): AlimentoOrganico[] {
        for (const alimento of AlimentoOrganico.alimentos) {
            console.log(`nome: ${this.nome}, preco: ${this.preco}, data validade: ${this.data_validade}, ingredientes: ${this.ingredientes}`)
        }
        return AlimentoOrganico.alimentos;
    }

}

