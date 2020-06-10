class Negociacao {

    //atributos sao definidos atraves do construtor
    constructor(data, quantidade, valor){
        this._data = data
        this._quantidade = quantidade;
        this._valor = valor;
        //Object freeze é shallow por isso ele nao entra nas propriedades de um objeto como por exemplo Date
        //por isso podemos setar o date usando negociacao.data().setDate(14)
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