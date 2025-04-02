/*+-------------------+
         | AlimentoOrganico  |
         +-------------------+
         | - dataValidade: Date|
         | - ingredientes: string[]|
         +-------------------+*/
import { ProdutoEcologico } from "./ProdutoEcologico";

export class AlimentoOrganico implements ProdutoEcologico{
    dataValidade : Date;
    ingredientes : String;
    nome : String;
    preco : number;

    constructor(dataValidade : Date, ingredientes : String, nome : String, preco : number){
        this.dataValidade = dataValidade;
        this.ingredientes = ingredientes;
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

    get_dataValidade(): Date {
        return this.dataValidade;
    }

    set_dataValidade(data1 : Date): void{
        this.dataValidade = data1;
    }

    get_ingredientes(): String{
        return this.ingredientes;
    }

    set_ingredientes(ingredientes1 : String): void{
        this.ingredientes = ingredientes1;
    }
    static listaAlimentosOrganicos : AlimentoOrganico[] = [];

    cadastrar(): void {
       AlimentoOrganico.listaAlimentosOrganicos.push(this);
       console.log(`Produto "${this.nome}" cadastrado com sucesso!`);
    }

    listar(): AlimentoOrganico{
        for(){

        }
    }
}