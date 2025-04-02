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
    const item = new ItemDecoracaoSustentavel("Vaso de Bambu", 50, "Bambu", { largura: 20, altura: 30, profundidade: 15 });


item.exibir();
item.cadastrar();