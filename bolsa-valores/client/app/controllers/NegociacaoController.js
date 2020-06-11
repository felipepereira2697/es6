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

        let helper = new DateHelper();

        let negociacao = new Negociacao(helper.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
        console.log('Negociacao: ',negociacao);

        console.log('Negociacao data formatada ',helper.dataParaTexto(negociacao.data));
    }

}