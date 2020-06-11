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
        console.log(this._inputData);
        //recebe um array ano, mes e dia
        //quando usa o spread significa q ele tem que ser desmembrado
        let data = new Date(
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
        console.log(data);
    }
}