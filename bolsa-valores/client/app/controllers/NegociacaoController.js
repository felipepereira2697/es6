class NegociacaoController{

    //para evitar percorrer o dom muitas vezes vamos colocar quantidade, valor e data como atributos da controller
    constructor() {
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputData       = document.querySelector('#data');
        this._inputValor      = document.querySelector('#valor');

    }
    adiciona(event) {
        //se vc nao cancelar o comportamento padrao do form ele vai recarregar, e ai perder infos
        event.preventDefault();

        let negociacao = new Negociacao(this.constroiData(), this._inputQuantidade.value, this._inputValor.value);
        console.log('Negociacao: ',negociacao);

    }

    
    constroiData(data){
        //recebe um array ano, mes e dia
        //quando usa o spread significa q ele tem que ser desmembrado
        return new Date(
            ...this._inputData.value
            .split('-')
            .map((item, index) => {
                if(index === 1){
                    //aqui é uma string mas o javascript faz o cast implicito
                    return item - 1;
                }
                return item;
            })
            );

    }
}