import { ProdutoEcologico} from "./ProdutoEcologico";

export class ProdutoLimpezaBiodegrdavel implements ProdutoEcologico{
    volume: number;
    nome: string;
    preco: number;

    constructor(volume: number, nome: string, preco: number){
        this.volume = volume;
        this.nome = nome;
        this.preco = preco;
    }

    exibir(){
        console.log("Nome: "+ this.nome + ", preço: " + this.preco + ", volume: " + this.volume)
    }

    cadastrar(): void{
        console.log("Produto cadastrado com sucesso: " + this.nome)
    }
}