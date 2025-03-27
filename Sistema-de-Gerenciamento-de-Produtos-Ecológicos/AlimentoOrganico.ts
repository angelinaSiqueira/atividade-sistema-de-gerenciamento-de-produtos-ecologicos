import { ProdutosEcologicos } from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutosEcologicos {
    nome: string;
    preco: number;
    dataValidade: Date;
    ingredientes: string[];

    constructor(nome: string, preco: number, dataValidade: Date, ingredientes: string[]) {
        this.nome = nome;
        this.preco = preco
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
    }

    
    cadastrar(): void {
        console.log(`
            Cadastrando Alimento Orgânico:
            Nome: ${this.nome}
            Preço: R$${this.preco.toFixed(2)}
            Data de Validade: ${this.dataValidade.toLocaleDateString()}
            Ingredientes: ${this.ingredientes.join(', ')}
            `);
    }
    exibir(): void {
        console.log(`ALIMENTO ORGÂNICO:
            Nome: ${this.nome}
            Preço: R$${this.preco.toFixed(2)}
            Data de Validade: ${this.dataValidade.toLocaleDateString()}
            Ingredientes: ${this.ingredientes.join(', ')}`);
    }


}

const maca = new AlimentoOrganico(
    "Maçã Orgânica",
    5.50,
    new Date(2025, 10, 21),
    ["Maçã orgânica"]
);

maca.cadastrar();
maca.exibir();
