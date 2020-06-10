class Negociacao {

    //atributos sao definidos atraves do construtor
    constructor(data, quantidade, valor){
        this._data = data
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get volume() {
        return this.getQuantidade() * this.getValor();
    }
    //acessadores
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}