/*+-------------------------------+
| ProdutoLimpezaBiodegradavel   |
+-------------------------------+
| - volume: number              |
+-------------------------------+*/

import { ProdutoEcologico } from "./ProdutoEcologico";

export class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    volume : number;
    nome : String;
    preco : number;

    constructor(volume : number, nome : String, preco : number,){
        this.volume = volume;
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

    get_volume(): number{
        return this.volume;
    }

    set_volume(volume1 : number): void{
        this.volume = volume1;
    }

    static listaProdutosLimpezaBio: ProdutoLimpezaBiodegradavel[] = [];

    cadastrar(): void {
        ProdutoLimpezaBiodegradavel.listaProdutosLimpezaBio.push(this);
        console.log(`Produto "${this.nome}" cadastrado com sucesso!`);
    }
    
    listarProdutos(): void {
        console.log("Lista de Produtos de Limpeza Biodegradáveis:");
        ProdutoLimpezaBiodegradavel.listaProdutosLimpezaBio.forEach((produto, index) => {
            console.log(
                `${index + 1}. Nome: ${produto.get_nome()}, Preço: R$${produto.get_preco()}, Volume: ${produto.get_volume()}ml`
            );
        });
}}