
interface Produto {
    nome: string;
    preco: number;
    quantidade: number;
}


function calcularTotal(produto: Produto): number {
    return produto.preco * produto.quantidade;
}


const meuProduto: Produto = {
    nome: "Caneta",
    preco: 2.5,
    quantidade: 10
};


console.log(`Produto: ${meuProduto.nome}`);
console.log(`Preço unitário: R$ ${meuProduto.preco.toFixed(2)}`);
console.log(`Quantidade: ${meuProduto.quantidade}`);
console.log(`Valor total: R$ ${calcularTotal(meuProduto).toFixed(2)}`);