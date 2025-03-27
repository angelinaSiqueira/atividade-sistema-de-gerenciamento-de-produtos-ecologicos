import {ContaBancaria} from "./ContaBancaria";

class ContaCorrente implements ContaBancaria {
  saldo:number

  constructor(saldoInicial:number) {
    this.saldo = saldoInicial
  }

  depositar(valor:number) {
    this.saldo += valor;
  }
}
