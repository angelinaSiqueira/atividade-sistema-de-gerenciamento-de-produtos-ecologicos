import { ProdutosEcologicos } from "./ProdutoEcologico";

class ProdutoLimpezaBiodegradavel implements ProdutosEcologicos {
    nome: string;
    preco: number;
    volume: number;
    constructor(nome: string, preco: number, volume: number) {
        this.nome = nome;
        this.preco = preco;
        this.volume = volume;
    }

}
//depois eu finalizo essa jabirasca
//const ProdutoDeLimpezaDoBAO 