class Negociacao {

    //atributos sao definidos atraves do construtor
    constructor(data, quantidade, valor){
        //bom, como pode ser passado um objeto q tem a data, ele copia a referencia desse objeto
        //e passa aqui pra dentro, no entanto para nao fazermos isso direto criamos uma nova data a partir
        //da data enviada, seja ela via new Date ou via objeto
        this._data = new Date(data.getTime());
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
        //Aqui vamos aplicar programacao defensiva pra nao deixar que alterem a data por fora da classe
        //esse retorno é um long gigante que calcula a data de tras ate a data atual que foi invocada
        //assim caso vc tente chamar esse metodo para alteracao de data, o maximo que vc vai conseguir é 
        //alterar a copia e nao o objeto interno
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}