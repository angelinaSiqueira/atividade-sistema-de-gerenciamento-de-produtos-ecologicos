import { AlimentoOrganico } from "./AlimentoOrganico";
import { ItemDecoracaoSustentavel } from "./ItemDecoracaoSustentavel";
import { ProdutoLimpezaBiodegradavel } from "./ProdutoLimpezaBiodegradavel";

const produtoAlimento = new AlimentoOrganico(new Date('2025-03-12'), ["Hodroxíla"] , "Repolho", 24) 
console.log(produtoAlimento.exibir())
console.log(produtoAlimento.cadastrar())

const produtoLimpeza = new ProdutoLimpezaBiodegradavel("Vassora de Garrafa pet", 30, 21)
console.log(produtoLimpeza.exibir())
console.log(produtoLimpeza.cadastrar())

const produtoDecoracao = new ItemDecoracaoSustentavel("Vaso de Vidro de Lâmpada", 12, "Vidro", {largura:2, altura:4, profundidade:3})
console.log(produtoDecoracao.exibir());
console.log(produtoDecoracao.cadastrar());