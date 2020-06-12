class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        //programacao defensiva para evitar problemas como adicionar ou limpar a lista sem usar os metodos corretos
        //para isso vamos retornar uma instancia nova de lista de negociacoes
        //vamos usar o metodo concat para criar um novo array com o conteudo de this._negociacoes
        return [].concat(this._negociacoes);
        
    }


}