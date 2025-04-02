import { ProdutoEcologico } from "./ProdutoEcologico";

class ProdutoLimpezaBioDegradavel implements ProdutoEcologico{
    volume: number;
    nome: String;
    preco: number;

    constructor(volume: number, nome: String, preco: number){
        this.volume = volume;
        this.nome = nome;
        this.preco = preco;
    }

    exibir (volume: number, nome: String, preco: number): void{
        console.log("volume: " + volume + ", nome: " + nome + ", preço: " + preco)
    }
    
    cadastrar (): void{
        console.log("Produto de limpeza biodegradavel cadastrado com sucesso")
    }

}