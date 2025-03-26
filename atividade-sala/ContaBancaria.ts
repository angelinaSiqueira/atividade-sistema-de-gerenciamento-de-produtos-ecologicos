export interface ContaBancaria{
    saldo:number,
    depositar(valor: number): void;
    sacar(valor : number): void;

}

class ContaCorrente implements ContaBancaria {
    saldo:number
}

construtor
