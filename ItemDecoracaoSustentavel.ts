import { ProdutoEcologico } from "./ProdutosEcologicos";

class ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome: String;
    preco: number;
    material: String;
    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number;
    }

    constructor(nomeProduto:string,precoProduto:number, material: String, dimensoes :{largura: number,altura: number,profundidade: number}){
        this.nome= nomeProduto;
        this.preco=precoProduto;
        this.material=material;
        this.dimensoes=dimensoes;
    
    
    }  
    exibirItemDecoracaoSustentavel() {
        console.log(`Nome do produto: ${this.nome}\nPreço do produto: ${this.preco}\nMaterial: ${this.material}\nDimensões: Largura: ${this.dimensoes.largura}cm, Altura: ${this.dimensoes.altura}cm, Profundidade: ${this.dimensoes.profundidade}cm`);
    }

    cadastrarItemDecoracaoSustentavel() {
        console.log(`Produto cadastrado: ${this.nome}`);
    }
}
const item = new ItemDecoracaoSustentavel("Vaso de Bambu", 50, "Bambu", { largura: 20, altura: 30, profundidade: 15 });


item.exibirItemDecoracaoSustentavel();
item.cadastrarItemDecoracaoSustentavel();