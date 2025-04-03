import { ContaBancaria } from "./ContaBancaria";

class ContaCorrente implements ContaBancaria {
    saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }
    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log("Sem saldo para realizar esta ação  ")
        } else {
            this.saldo -= valor
        }
    }

    depositar(valor: number) {
        this.saldo += valor
    }

}
const conta = new ContaCorrente(1000);
console.log("Saldo Inicial", conta.saldo)

conta.depositar(500);
console.log("Saldo após deposito", conta.saldo)

conta.sacar(200);
console.log("saldo após o saque", conta.saldo)

conta.sacar(1301);
console.log("saldo após o saque", conta.saldo)
