import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 76019167070, 397901161);
const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1;

const cliente2 = new Cliente("Alice", 40158682009, 280915494);
const conta2 = new ContaCorrente();
conta2.agencia = 1001;
conta2.cliente = cliente2;

conta1.depositar(100);
conta1.sacar(20);

let valorASerSacado = 30;
conta1.transferir(valorASerSacado, conta2)
console.log("\n", conta1);
console.log("\n", conta2);