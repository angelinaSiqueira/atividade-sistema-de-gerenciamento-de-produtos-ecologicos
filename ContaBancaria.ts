
export interface ContaBancaria {
    saldo: number;
    depositar(valor: number);
    sacar(valor: number): void;
    
}