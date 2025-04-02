import { ProdutoEcologico } from "./ProdutosEcologicos";

class AlimentosOrganicos implements ProdutoEcologico{
    nome: String;
    preco:Number;
    dataValidade: Date;
    ingredientes: string;

constructor(nome:string, preco:number, dataValidade:Date, ingredientes:string){
    this.nome=nome;
    this.preco=preco;
    this.dataValidade=dataValidade;
    this.ingredientes=ingredientes;
}
exibirAlimentos(){
    console.log("nome do produto"+this.nome+" preço do produto "+this.preco+" data de validade "+this.dataValidade+" ingredientes do produto "+this.ingredientes)

}

cadastrarAlimentos(){
    console.log("Nome do alimento "+this.nome+ "Preço "+this.preco+"data de validade "+this.dataValidade+" ingredientes ")
}
}

const nome = new AlimentosOrganicos("alface", 5.00,  new Date(28/3/2025 ), "alface")
nome.cadastrarAlimentos()

const exibir = new AlimentosOrganicos("alface", 5.00,  new Date(28/3/2025 ), "alface")
exibir.exibirAlimentos()