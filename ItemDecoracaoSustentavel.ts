/*+-----------------------------------+
| ItemDecoracaoSustentavel          |
+-----------------------------------+
| - material: string               |
| - dimensoes: { largura: number;  |
|                altura: number;   |
|                profundidade: number}|
+-----------------------------------+*/

import { ProdutoEcologico } from "./ProdutoEcologico";

export class ItemDecoracaoSustentavel implements ProdutoEcologico{
    material : String;
    dimensoes: {
        largura : number;
        altura : number;
        profundidade : number;
        }  
    nome : String;
    preco : number;

    constructor(material : String, dimensoes: {largura : number, altura : number, 
        profundidade : number}, nome : String, preco : number){
        this.material = material;
        this.dimensoes = dimensoes;
        this.nome = nome;
        this.preco = preco;
    }

    get_nome(): String{
        return this.nome;
    }

    set_nome(nome1 : String): void{
        this.nome = nome1;
    }

    get_preco(): number{
        return this.preco;
    }

    set_preco(preco1 : number): void{
        this.preco = preco1;
    }
    
    get_material():String{
        return this.material;
    }

    set_material(material1 : String): void{
        this.material = material1;
    }

    get_dimensoes(): number{
        return this.dimensoes.largura, this.dimensoes.altura, this.dimensoes.profundidade;
    }

    set_dimensoes( largura1 : number, altura1 : number, profundidade1 : number): void{
            this.dimensoes.largura = largura1;
            this.dimensoes.altura = altura1;
            this.dimensoes.profundidade = profundidade1;
         } 

    static listaDecoracao: ItemDecoracaoSustentavel[] = [];

    cadastrar(): void {
        ItemDecoracaoSustentavel.listaDecoracao.push(this);
        console.log(`Produto "${this.nome}" cadastrado com sucesso!`);
    }
}