import { Produto_Ecologico } from "./produto_ecologico";

class ItemDecoracaoSustentavel implements Produto_Ecologico{
    nome: string;
    preco: number;
    material:string
    dimensoes: { largura: number;  
                      altura: number;   
                       profundidade: number}

constructor(nome:string,preco:number,material:string,dimesoes:{ largura: number;  altura: number; profundidade: number}){
    this.nome = nome
    this.preco = preco
    this.material = material
    this.dimensoes = dimesoes
}  

exibir(): void {
    
}
}