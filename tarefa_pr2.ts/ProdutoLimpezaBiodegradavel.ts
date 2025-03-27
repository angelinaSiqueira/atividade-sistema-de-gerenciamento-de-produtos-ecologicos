import { Produto_Ecologico } from "./produto_ecologico";

class ProdutoLimpezaBiodegradavel implements Produto_Ecologico{
    nome: string;
    preco: number;
    volume:number

    constructor(nome:string, preco:number, volume:number){
        this.nome = nome
        this.preco = preco
        this.volume = volume
    }
    exibir(): void {
        console.log(`produto:${this.nome}`);
        console.log(`preco:${this.preco}`)
        console.log(`valor${this.volume}`)
      }
    cadastrar(): void {
        console.log(`O produto foi cadastrado`)
      }
}
const sabao = new ProdutoLimpezaBiodegradavel("sabao",1,1)
sabao.cadastrar()
sabao.exibir()