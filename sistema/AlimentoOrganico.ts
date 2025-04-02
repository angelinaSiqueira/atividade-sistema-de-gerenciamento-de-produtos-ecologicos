import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico{
    dataValidade: Date;
    ingredientes: String[];
    nome: String;
    preco: number;

    constructor(dataValidade: Date, ingredientes: String[], nome: String, preco: number){
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
        this.nome = nome;
        this.preco = preco;
    }

    exibir (dataValidade: Date, ingredientes: String[], nome: String, preco: number): void{
        console.log("Data: " + dataValidade + ", ingredientes: " + ingredientes + ", nome: " + nome + ", preço: " + preco)
    }

    cadastrar (): void{
        console.log("Alimento Organico cadastrado com sucesso")
    }
}