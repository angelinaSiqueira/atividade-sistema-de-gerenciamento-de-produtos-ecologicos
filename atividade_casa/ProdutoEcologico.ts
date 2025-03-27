export interface ProdutoEcologico {
    nome: string;
    preco: number;

    get_nome(): string;
    set_nome(nome1: string): void;
    get_preco(): number;
    set_preco(preco1: number): void;
}