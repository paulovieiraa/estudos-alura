import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 76019167070, 397901161);

const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
const contaSalario = new ContaSalario(cliente1);

const diretor = new Diretor("Rodrigo", 10000, 55251656009);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 17982145043);
gerente.cadastrarSenha("123");

const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "123");

const cliente = new Cliente("Lais", 3242342, 232, "1234");
const clienteLogado = SistemaAutenticacao.login(cliente, "1234");

console.log(diretorLogado);
console.log(gerenteLogado);
console.log(clienteLogado);