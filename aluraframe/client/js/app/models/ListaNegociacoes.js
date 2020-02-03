class ListaNegociacoes {

    constructor (armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        //vai receber como parametro a propria instancia q esta sendo chamada
        this._armadilha(this);
    }

    get negociacoes() {
        //usando programacao defensiva para blindar nossa lista de negociacoes, retornar um outro objeto 
        return [].concat(this._negociacoes);

    }
    esvazia() {
        this._negociacoes = [];
        //Usando a API de Reflection para manipular o this pois no JS o this tem escopo dinamico
        this._armadilha(this);
        
    }
}