import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 76019167070, 397901161);

const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
const contaSalario = new ContaSalario(cliente1);

contaCorrente.depositar(100);
contaCorrente.sacar(20);

contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);

console.log(contaCorrente);
console.log(contaPoupanca);