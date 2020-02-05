class ListaNegociacoes {

    constructor () {
        this._negociacoes = [];
        
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        //vai receber como parametro a propria instancia q esta sendo chamada
        
    }

    get negociacoes() {
        //usando programacao defensiva para blindar nossa lista de negociacoes, retornar um outro objeto 
        return [].concat(this._negociacoes);

    }
    esvazia() {
        this._negociacoes = [];
        
        
        
    }
}