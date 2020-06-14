class NegociacaoController{

    //para evitar percorrer o dom muitas vezes vamos colocar quantidade, valor e data como atributos da controller
    constructor() {
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputData       = document.querySelector('#data');
        this._inputValor      = document.querySelector('#valor');
        this._listaNegociacoes  = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView(document.querySelector('#negociacoesView'));

        this._negociacoesView.update(this._listaNegociacoes);

    }
    adiciona(event) {
        //se vc nao cancelar o comportamento padrao do form ele vai recarregar, e ai perder infos
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
    }

    //metodos privado
    _criaNegociacao() {
        return new Negociacao(DateHelper.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
    }
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }



}