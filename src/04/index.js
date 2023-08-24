const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        this.historicos[this.historicos.length] = {
            tipo: "Depósito",
            valor: valor, //aqui será o valor informado no argumento do método depositar
        }
        console.log(`Deposito de ${valor} realizado para o cliente: ${this.nome}.`)
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
            return;
        }
        this.saldo -= valor;
        this.historicos[this.historicos.length] = {
            tipo: "Saque",
            valor: valor
        }

        console.log(`Saque de R$${valor / 100} realizado para o cliente: ${this.nome}.`)

    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: ${this.saldo}`)
        console.log(`Historico`);
        for (const Historico of this.historicos) {
            console.log(`${Historico.tipo} de R$ ${Historico.valor}`);

        }
    }
}

contaBancaria.depositar(30000);
contaBancaria.sacar(5000);
contaBancaria.sacar(5000);
contaBancaria.extrato();