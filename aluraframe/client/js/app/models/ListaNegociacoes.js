class ListaNegociacoes {

    constructor () {
        this._negociacoes = [];
        
    }
    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
        
    }

    get negociacoes() {
        //usando programacao defensiva para blindar nossa lista de negociacoes, retornar um outro objeto 
        return [].concat(this._negociacoes);

    }
    esvazia() {
        this._negociacoes = [];
   
    }
    get volumeTotal() {
        this._negociacoes.reduce((total, n) =>  total + n.volume,0.0);
    }
}