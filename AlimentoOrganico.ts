import { ProdutoEcologico } from "./ProdutoEcologico";

class AlimentoOrganico implements ProdutoEcologico{
    nome:string;
    preco:number;
    dataValidade:Date;
    ingredientes: String;

    constructor(nome:string, preco:number, dataValidade:Date, ingredientes: string){
        this.nome= nome;
        this.preco= preco;
        this.dataValidade= dataValidade;
        this.ingredientes= ingredientes;


    }
    cadastrar():void{
        console.log(`alimento orgânico:"${this.nome}" cadastrado com sucesso`);
    }
    exibirInfo():void{
        console.log(`alimento organico:${this.nome}, preço: ${this.preco}, validade: ${this.dataValidade}, ingredientes: ${this.ingredientes}`)
    }
 }