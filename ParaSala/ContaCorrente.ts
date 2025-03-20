import {ContaBancaria} from "./ContaBancaria";

class ContaCorrente implements ContaBancaria{
    saldo: number;

    constructor(saldoInicial:number){
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Seu saldo atual é ${this.saldo}`)
    }

    sacar(valor: number): void {
        if(this.saldo>=valor){
            this.saldo -= valor;
            console.log(`Seu saldo atual é ${this.saldo}`)
        }else if(this.saldo<valor){
            console.log("Saldo insuficiente!")
        }
    }
}

const conta = new ContaCorrente(1000);

console.log(conta.depositar(500));
console.log(conta.sacar(200));
console.log(conta.sacar(1302));