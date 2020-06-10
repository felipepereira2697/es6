class Negociacao {

    //atributos sao definidos atraves do construtor
    constructor(data, quantidade, valor){
        this._data = data
        this._quantidade = quantidade;
        this._valor = valor;
    }

    getVolume() {
        return this.getQuantidade() * this.getValor();
    }
    //acessadores
    getData() {
        return this._data;
    }
    getQuantidade() {
        return this._quantidade;
    }
    getValor() {
        return this._valor;
    }
}