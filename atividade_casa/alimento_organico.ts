import { produto_ecologico } from "./produto_ecologico";

class alimneto_organico implements produto_ecologico{
    nome: string;
    preco: number;
    data_validade: Date;
    ingrediente: string[];
}