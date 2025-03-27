import { ProdutoLimezaBiodegradavel } from "./ProdutoLimpezaBiodegradavel";
import { AlimentoOrganico } from "./AlimentoOrganico";
import { ItemDecoracaoEcologica } from "./ItemDecoracaoSustentavel";

const produtoLimpeza = new ProdutoLimezaBiodegradavel("Sabão", 14, 500);
produtoLimpeza.cadastrar();

const alimentoOrganico = new AlimentoOrganico("bolo de cenoura", 20, new Date(2025 - 12 - 20), ["cenoura", "farinha"])
alimentoOrganico.cadastrar();

const itemDecoracao = new ItemDecoracaoEcologica("vaso de flor", 32, "madeira", { largura: 10, altura: 30, profundidade: 40 })
itemDecoracao.cadastrar();

console.log("Podutos de limpeza biodegradavel: ")
produtoLimpeza.listar();

console.log("Alimentos orgânicos: ")
alimentoOrganico.listar();

console.log("Itens de decoração: ")
itemDecoracao.listar();

