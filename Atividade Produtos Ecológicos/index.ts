import {ProdutoLimpezaBiodegradavel} from "./ProdutoLimpezaBiodegradavel";
import {ItemDecoracaoSustentavel} from "./ItemDecoracaoSustentavel";
import {AlimentoOrganico} from "./AlimentoOrganico";

console.log("Teste");

const produto1 = new ProdutoLimpezaBiodegradavel(20, "Abroba", 45)
produto1.exibir()
produto1.cadastrar()
const item = new ItemDecoracaoSustentavel("Chocolate", "Ovo chocolate", 80, { largura: 0.20, altura: 0.70, profundidade: 0.02})
item.exibir()
item.cadastrar()
const alimento = new AlimentoOrganico(new Date, ["abobrinha", "Suco"], "Suco de abobrinha", 12)
alimento.exibir()
alimento.cadastrar()