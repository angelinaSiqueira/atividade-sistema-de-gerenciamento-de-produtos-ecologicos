import { Produto_Ecologico } from "./produto_ecologico";

class ItemDecoracaoSustentavel implements Produto_Ecologico{
    nome: string;
    preco: number;
    material:string
    dimensoes: { largura: number;  
                      altura: number;   
                       profundidade: number}

constructor(nome:string,preco:number,material:string, largura: number,  altura: number, profundidade: number){
    this.nome = nome
    this.preco = preco
    this.material = material
    this.dimensoes = {largura,altura,profundidade}
}  

exibir(): void {
    console.log(`produto:${this.nome}`);
    console.log(`preco:${this.preco}`)
    console.log(`material:${this.material}`)
    console.log(`dimensoes:${this.dimensoes.altura} x ${this.dimensoes.largura} x ${this.dimensoes.profundidade}`)
  }  
  cadastrar(): void {
    console.log(`O item foi cadastrado`)
  }
}
const detergente = new ItemDecoracaoSustentavel("detergente",14,"detergente",12,15,12)
detergente.cadastrar()
detergente.exibir()