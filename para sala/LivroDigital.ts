import { Livro } from "./livro";

class LivroDigital implements Livro{
    tipo:string
    titulo:string;
    autor:string
    detalhes:string

constructor(tipo:string,titulo:string, autor:string){
this.tipo = tipo
this.titulo = titulo
this.autor = autor
}

datalhes():string{
    return `titulo:${this.titulo}, autor:${this.autor}, datalhes:${this.datalhes},tipo:${this.tipo}`
}

}

const LivroA = new LivroDigital("AAA","AAAAAAA","AAAAAAAAA")

console.log(LivroA.datalhes())