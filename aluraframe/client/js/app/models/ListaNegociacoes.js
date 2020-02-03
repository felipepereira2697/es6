class ListaNegociacoes {

    constructor(contexto, armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        //vai receber como parametro a propria instancia q esta sendo chamada
        //this._armadilha(this);
        //Usando a API de Reflection para manipular o this pois no JS o this tem escopo dinamico
        Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    get negociacoes() {
        //usando programacao defensiva para blindar nossa lista de negociacoes, retornar um outro objeto 
        return [].concat(this._negociacoes);

    }
    esvazia() {
        this._negociacoes = [];
        //Usando a API de Reflection para manipular o this pois no JS o this tem escopo dinamico
        Reflect.apply(this._armadilha, this._contexto, [this]);
        //this._armadilha(this);
    }
}