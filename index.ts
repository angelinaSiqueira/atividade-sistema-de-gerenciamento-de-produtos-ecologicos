import { AlimentoOrganico } from "./AlimentoOrganico";
import { ItemDecoracaoSustentavel } from "./ItemDecoracaoSustentavel";
import { ProdutoLimpezaBiodegradavel } from "./ProdutoLimpezaBiodegradavel";


const produtoLimpeza = new ProdutoLimpezaBiodegradavel( 10, "sabao", 20);
produtoLimpeza.cadastrar;
produtoLimpeza.listarProdutos;

const alimentoOrganico = new AlimentoOrganico(new Date(2025-8-9), "cenoura","cenoura", 20);
alimentoOrganico.cadastrar;

const itemDecoracao = new ItemDecoracaoSustentavel("folha de bananeira", {largura: 10, altura: 10, profundidade: 3},"ecobag", 20);
itemDecoracao.cadastrar;