import { ItemDecoracaoSustentavel } from "./ItemDecoracaoSustentavel";
import { AlimentoOrganico } from "./AlimentoOrganico";
import { ProdutoLimpezaBiodegrdavel } from "./ProdutoLimpezaBiodegradavel";

const a = new ProdutoLimpezaBiodegrdavel(15.5, "Qboa", 12);
a.exibir;
a.cadastrar;

const b = new AlimentoOrganico(new Date(2025,2,4), ['Tomate, Cebola, alho'], 'molho', 15.60);
b.exibir;
b.cadastrar;

const c = new ItemDecoracaoSustentavel('madeira', {largura: 14, altura: 10, profundidade: 12}, 'cabeceira', 500);
c.exibir;
c.cadastrar;
