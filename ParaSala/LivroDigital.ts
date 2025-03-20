import {Livro} from "./Livro";

class LivroDigital implements Livro{
    tipo:string;
    titulo: string;
    autor: string;

    constructor(tipo:string, titulo:string, autor:string){
        this.autor = autor;
        this.tipo = tipo;
        this.titulo = titulo;
    }

    detalhes(): string{
        return `Titulo: ${this.titulo}, formato: ${this.tipo}, autor: ${this.autor}`;
    }
}

const livroA = new LivroDigital("pdf","Harry potter","André");
console.log(livroA.detalhes());