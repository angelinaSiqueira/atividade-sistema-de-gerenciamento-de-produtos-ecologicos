class  ItemDecoracaoSustentavel implements ProdutoEcologico{
    nome: string;
    preco:number;
    material:string;
    dimensoes: { largura: number;
                altura: number;
                 profundidade: number;
    };
    constructor(nome:string, preco:number, material:string, dimensoes:{ largura:number, altura:number, profundidade:number}){
        this.nome= nome;
        this.preco=preco;
        this.material=material;
        this.dimensoes=dimensoes;
    
    }
    exibir(){
        console.log("nome:"+ this.nome + "preco:" + this.preco + "Material:" + this.material + "dimensoes:" + this.dimensoes)
    }
    cadastrar():void{
        console.log("material:" + this.material)
    }
    
    }
    const item = new ItemDecoracaoSustentavel("Flor", 50, "Rosa", { largura: 24, altura: 36, profundidade: 10 });

item.exibir();
item.cadastrar();