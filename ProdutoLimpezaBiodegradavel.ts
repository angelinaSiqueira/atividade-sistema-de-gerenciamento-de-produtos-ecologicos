class ProdutoLimpezaBiodegradavel implements ProdutoEcologico{
    nome:String;
    preco:number;
    volume:number;

    constructor(nome:String, preco:number, volume:number){
        this.nome=nome;
        this.preco=preco;
        this.volume= volume;
    }
    exibir(){
        console.log("nome:"+ this.nome + "preco:" + this.preco + "volume:" + this.volume)
    }
    cadastrar():void{
        console.log("volume:" + this.volume)
    }
    }
    const produto = new ProdutoLimpezaBiodegradavel("sabão", 15, 500);


produto.exibir();
produto.cadastrar();