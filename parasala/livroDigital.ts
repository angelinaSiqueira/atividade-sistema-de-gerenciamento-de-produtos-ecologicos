import {livro } from "./livro";
class livroDigital implements livro{
    titulo: string;
    autor: string;
    tipo:string;

    detalhes(): string {
        return `titulo: ${this.titulo}, autor: ${this.autor}, tipo :${this.tipo}`;
    }

    

    constructor(titulo:string, autor:string,  tipo:string){
        this.titulo = titulo;
        this.autor = autor;
        this.tipo = tipo;

    }
    
}

const livrodigital = new livroDigital("livro", "autor","");

