import { produtoEcologico } from "./produtoEcologico";

export class ItemDecoracaoSustentavel implements produtoEcologico {
    nome: string;
    preco: number;
    material: string;

    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number;
    };

    constructor(preco: number, nome: string, material: string, dimensoes:{largura: number, altura: number, profundidade: number}){
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes= dimensoes;
    }

    toString() {
        return(`Nome: ${this.nome}, ${this.preco} , material: ${this.material}, dimensões: ${this.dimensoes.largura} x ${this.dimensoes.altura} x ${this.dimensoes.profundidade}`)

    }

     cadastrar(){
        return "Foi cadastrado o produto: " + this.nome
    }

}