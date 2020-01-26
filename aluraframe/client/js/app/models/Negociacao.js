class Negociacao {
    constructor(data, quantidade, valor) {
        //o this sempre aponta pra instancia que ta executando aquele momento
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    obtemVolume() {
        return this.quantidade * this.valor;
    }
}