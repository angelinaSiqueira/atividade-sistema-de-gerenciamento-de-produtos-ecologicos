import { AlimentoOrganico } from "./AlimentoOrganico";
import { ItemDecoracaoSustentavel } from "./ItemDecoracaoSustentavel";
import { ProdutoLimpezaBiodegradavel } from "./ProdutoLimpezaBiodegradavel";

const alimento = new AlimentoOrganico("banana", 10, new Date, ["batata", "ovo"])
alimento.exibir();
alimento.cadastrar();
const item = new ItemDecoracaoSustentavel("marmore", "plastico", 100, {largura:20, altura:90, profundidade:24})
item.exibir();
item.cadastrar();
const produto = new ProdutoLimpezaBiodegradavel(300, "olho", 1);
produto.exibir();
produto.cadastrar();