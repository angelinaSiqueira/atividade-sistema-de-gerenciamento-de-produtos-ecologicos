// Criando instâncias dos produtos

const alimento = new Organico(
    "Arroz Orgânico",
    15.99,
    new Date("2025-12-31"),
    ["Arroz orgânico, sal marinho"]
);
const produtoLimpeza = new Biodegradavel(
    "Detergente Biodegradável",
    8.50,
    1
);
const itemDecoracao = new DecoracaoSustentavel(
    "Luminária de Madeira Reciclada",
    120.00,
    "Madeira reciclada",
    { largura: 25, altura: 40, profundidade: 20 }
);

// Cadastrando e exibindo os produtos
alimento.cadastrar();
alimento.exibir();

produtoLimpeza.cadastrar();
produtoLimpeza.exibir();

itemDecoracao.cadastrar();
itemDecoracao.exibir();