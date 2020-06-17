class ListaNegociacoes {

    constructor(armadilha) {
        this._negociacoes = [];
        //armadilha pra atualizar a view, vai ser uma funcao, e vale lembrar que nao é pq eu declaro no inicio
        //que eu estou executando, essa function só executada no adiciona e no esvazia
        this._armadilha = armadilha;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);

        //quero atualizar a propria view q foi chamada
        this._armadilha(this);
    }

    get negociacoes(){
        //utilizando programacao defensiva para evitar problemas como adicionar ou limpar a lista sem usar os metodos corretos
        //para isso vamos retornar uma instancia nova de lista de negociacoes
        //vamos usar o metodo concat para criar um novo array com o conteudo de this._negociacoes
        return [].concat(this._negociacoes);
        
    }

    esvazia() {
        this._negociacoes = [];
        this._armadilha(this);
    }


}