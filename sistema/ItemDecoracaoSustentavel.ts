import { ProdutoEcologico } from "./ProdutoEcologico";

class ItemDecoracaoSustentavel implements ProdutoEcologico{
    material: String;
    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number;
    }
    nome: String;
    preco: number;

    constructor(material: String, dimensoes: {largura: number, altura: number, profundidade: number}, nome: String, preco: number){
        this.material = material;
        this.dimensoes = dimensoes;
        this.nome = nome;
        this.preco = preco;
    }

    exibir (material: String, dimensoes: {largura: number, altura: number, profundidade: number}, nome: String, preco: number): void{
        console.log("material: " + material + ", dimensoes: " + dimensoes +  ", nome: " + nome + ", preço: " + preco)
    }

    cadastrar(): void{
        console.log("Item de decoração Sustentavel cadastrado com sucesso")
    }
}