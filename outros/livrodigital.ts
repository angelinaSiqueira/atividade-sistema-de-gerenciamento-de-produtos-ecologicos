import { Livro } from "./livro";

class LivroDigital implements Livro {
    titulo: string;
    autor: string;
    formato: string;


    constructor(titulo: string, autor: string, formato: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.formato;
    }

    detalhe(): string {
        return `O nome do  livro é ${this.titulo} o autor é ${this} o tipo é ${this.formato}`

    }
}
const LivroDigitalQueFoiDigitalizado = new LivroDigital("Introdução à programação orientada a objetos usando Java", "Rafael Santos ", "PDF");

console.log(LivroDigitalQueFoiDigitalizado.detalhe())