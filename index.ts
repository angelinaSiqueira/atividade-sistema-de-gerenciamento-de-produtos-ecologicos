import { alimentoorganico } from "./alimento-organico";
import { itemdecoracao } from "./Item-decoracao-Sustentavel";
import { Produtoecologico } from "./Prdotudo-ecologico";
import { ProdutolimpezaBiodegradavel } from "./Produto-limpeza-Biodegradavel";

const e =  new alimentoorganico (new Date(2025, 11, 25), 'Tomate, Alho, Sal', 'Molho Orgânico', 15.99);
e.exibir
e.cadastrar
const f = new itemdecoracao(
    'Madeira', 
    { largura: 30, altura: 50, profundidade: 10 }, 
    'Estante de Sala', 
    199.99
);
f.exibir
f.cadastrar

const p = new ProdutolimpezaBiodegradavel(1.5, 'Detergente Ecológico', 9.99);
p.exibir()
p.cadastrar()