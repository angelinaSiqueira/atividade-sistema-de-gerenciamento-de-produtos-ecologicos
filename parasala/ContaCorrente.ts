import { ContaBancaria } from "./contabancaria";
class ContaCorrente implements ContaBancaria {
    saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }
    depositar(valor: number): void {
        this.saldo += valor;;
    }

    sacar(valor:number): void{
        if(this.saldo>0){
            
            this.saldo-=valor;
        }else{
            console.log("nao há saldo");
        }
    }

    

}

const contaCorrente = new ContaCorrente(1000);

contaCorrente.depositar(500);

contaCorrente.sacar(200);

contaCorrente.sacar(1301);