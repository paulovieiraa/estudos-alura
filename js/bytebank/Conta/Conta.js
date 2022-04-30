//Classe abstrata
export class Conta {

    constructor(saldoInicial, cliente, agencia) {

        if (this.constructor == Conta) {
            throw new Error("Classe interna, não faz sentido ser instanciada de maneira aleatoria.");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    // metodo abstrato
    sacar(valor) {
        throw new Error("Metodo abstrato");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
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