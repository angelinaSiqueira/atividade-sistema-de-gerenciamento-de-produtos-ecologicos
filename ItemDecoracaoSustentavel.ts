import { ProdutoEcologico } from "./ProdutoEcologico";

class ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome: string;
    preco: number;
    material: string;
    dimensoes:{largura:number; altura: number; profundidade:number};

    constructor(nome: string, preco: number, material: string, dimensoes:{largura:number; altura: number; profundidade:number }){
        this.nome=nome;
        this.preco= preco;
        this.material=material;
        this.dimensoes= dimensoes;

    }

    cadastrar(): void {
        console.log(`item de decoracao ${this.nome}`);

    }


    exibirInfo():void{
        console.log(`item de decoracao: ${this.nome}`);
        console.log(`preco: ${this.preco}`);
        console.log(`material: ${this.material}`);


}
}