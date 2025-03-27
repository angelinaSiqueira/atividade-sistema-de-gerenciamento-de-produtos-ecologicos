import { ProdutoEcologico } from "./ProdutoEcologico";

class ProdutoLimpezaBiodegradavel implements ProdutoEcologico {
    nome: string;
    preco: number;
    volume: number;

    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }
}
const plb = new ProdutoLimpezaBiodegradavel("detergente", 5, 7)


