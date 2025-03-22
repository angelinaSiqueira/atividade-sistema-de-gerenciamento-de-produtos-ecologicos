import { produto_ecologico } from "./produto_ecologico";

class item_decoracao_sustentavel implements produto_ecologico {
    nome: string;
    preco: number;
    material: string;
    dimensoes: {
        largura: number;
        altura: number;
        profundidade: number;
    }
}