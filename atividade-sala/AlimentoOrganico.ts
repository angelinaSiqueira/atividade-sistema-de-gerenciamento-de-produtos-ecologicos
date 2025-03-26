import { ProdutoEcologico} from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico{
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
}