import { produtoEcologico } from "./ProdutoEcologico";

class ItemDecoracaoSustentavel implements produtoEcologico {
    nome: string;
    preco: number;
    material: string;

    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number;
    };

    constructor(preco: number, nome: string, material: string, largura: number, altura: number, profundidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.material = material;
        this.dimensoes = {
            largura: largura,
            altura: altura,
            profundidade: profundidade
        };
    }

    toString(nome: string, preco: number, material: string, largura: number, altura: number, profundidade: number) {
        console.log(`Nome: ${nome}, ${preco} , material: ${material}, dimensões: ${largura} x ${altura} x ${profundidade}`)

    }

     cadastrar(){
        console.log("foi cadastrado o produto" + this.nome)
    }

}