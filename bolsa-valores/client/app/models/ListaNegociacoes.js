class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        
         this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        //utilizando programacao defensiva para evitar problemas como adicionar ou limpar a lista sem usar os metodos corretos
        //para isso vamos retornar uma instancia nova de lista de negociacoes
        //vamos usar o metodo concat para criar um novo array com o conteudo de this._negociacoes
        return [].concat(this._negociacoes);
        
    }

    esvazia() {
        this._negociacoes = [];
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, item) => total + item.volume, 0.0);
    }

}