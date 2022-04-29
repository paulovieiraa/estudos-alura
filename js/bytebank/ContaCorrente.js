import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    agencia;

    // Existe uma proposta para o objeto ser privado, colocando o '#'. Porem ainda nao é obrigatorio
    // Por convenção, fica definido que o objeto para ser privado, basta inserir o '_' antes do nome
    // Exemplo.: _saldo;
    // O objeto é publico, mas a convenção o determina como "privado".
    _saldo = 0;
    _cliente;

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
        console.log('Se utilizar a variavel da forma: "#saldo", ela se torna privada - por proposta nao oficial');
        console.log('O valor so esta visivel dentro da classe \ndeste modo, ele fica restrito.\nExiste, mas nao é usado para visualizar fora.')
        // console.log('Saldo: ',this.#saldo);
        // console.log('Saldo: ', this._saldo);
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}