import { ProdutoEcologico } from "./ProdutosEcologicos";


class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    nome: String;
    preco: number;
     volume: number;

constructor(nomeProduto:String,precoProduto:number,volume:number){
    this.nome= nomeProduto;
    this.preco=precoProduto;
    this.volume=volume;


}  
exibirProdutoOrganico() {
    console.log(`Nome do produto: ${this.nome}\nPreço do produto: ${this.preco}\nVolume: ${this.volume}ml`);
}

cadastrarProdutoOrganico() {
    console.log(`Produto cadastrado: ${this.nome}`);
}
}


const produto = new ProdutoLimpezaBiodegradavel("sabão", 15, 500);


produto.exibirProdutoOrganico();
produto.cadastrarProdutoOrganico();