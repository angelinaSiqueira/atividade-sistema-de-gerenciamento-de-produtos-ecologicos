import {ProdutoLimpezaBiodegradavel} from "./ProdutoLimpezaBiodegradavel";
import {AlimentoOrganico} from "./AlimentoOrganico";
import {ItemDecoracaoSustentavel} from "./ItemDecoracaoSustentavel";



const plB = new ProdutoLimpezaBiodegradavel('Rede',15,25);
console.log(plB.toString())
console.log(plB.cadastrar())
console.log("\n")

const aO=new AlimentoOrganico('Maça',5.99,new Date('2025-07-11'),["maca"])
console.log(aO.toString())
console.log(aO.cadastrar())
console.log("\n")

const iDs= new ItemDecoracaoSustentavel(15,'VasoDeFlor','Garrafa de plastico', {largura:3,altura:5,profundidade:10} )
console.log(iDs.toString())
console.log(iDs.cadastrar())
console.log("\n")





