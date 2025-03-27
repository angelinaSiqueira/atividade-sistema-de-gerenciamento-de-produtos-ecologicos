import { ProdutoEcologico} from "./ProdutoEcologico";

export class AlimentoOrganico implements ProdutoEcologico{
    dataValidade: Date;
    ingredentes: string[]; 
    nome: string;
    preco: number;


    constructor(dataValidade: Date, ingredientes: string[], nome: string, preco: number){
        this.dataValidade = dataValidade;
        this.ingredentes = ingredientes;
        this.nome = nome;
        this.preco = preco;
    }


    exibir(){
        console.log("nome: " + this.nome + ", preço: " + this.preco + ", data de validade: " + this.dataValidade + ", ingredientes: " + this.ingredentes)
    }

    cadastrar(): void{
        console.log("Produto cadastrado com sucesso: " + this.nome)
    }
}

