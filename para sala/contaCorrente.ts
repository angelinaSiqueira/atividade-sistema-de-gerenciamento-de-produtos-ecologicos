import {contaBancaria} from "./contaBancaria";

class contaCorrente implements contaBancaria {
    saldo:number

    constructor(saldoInicial:number){
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo +=valor;
    }
    
    sacar(valor: number): void {
        if(this.saldo >= valor){
        this.saldo -= valor
        
        }else{
            console.log(`saldo insuficiente`)
        }
    }

   
        
    
}

const conta = new contaCorrente(1000)

conta.depositar(500)
console.log(`o saldo da conta é ${conta.saldo}`);
conta.sacar(200)
console.log(`o saldo da conta é ${conta.saldo}`);
conta.sacar(1302)
console.log(`o saldo da conta é ${conta.saldo}`);