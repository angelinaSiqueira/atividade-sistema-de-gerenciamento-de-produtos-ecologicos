import { Produtoecologico } from "./Prdotudo-ecologico";


export class alimentoorganico implements Produtoecologico{
    datavalidade:Date
    ingrediente:string
    nome:string
    preco: number



    constructor(datavalidade:Date, ingredientes: string, nome:string, preco:number){
        this.datavalidade = datavalidade;
        this.ingrediente = ingredientes;
        this.nome = nome;
        this.preco = preco;
    }

    exibir(){
        console.log("Nome:" + this.nome + "/ preço: " + this.preco + "/ ingredientes: " + this.ingrediente + "/ validade: " + this.datavalidade)
    }
    cadastrar():void{
        console.log("foi cadastrado o alimento" + this.nome)
    }
    
}


