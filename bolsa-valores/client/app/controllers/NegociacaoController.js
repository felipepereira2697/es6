class NegociacaoController{

    //para evitar percorrer o dom muitas vezes vamos colocar quantidade, valor e data como atributos da controller
    constructor() {
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputData       = document.querySelector('#data');
        this._inputValor      = document.querySelector('#valor');

        this._negociacoesView = new NegociacoesView(document.querySelector('#negociacoesView'));
        this._listaNegociacoes  = new ListaNegociacoes((model) => {

            this._negociacoesView.update(model);
        });

        //Primeira renderizacao da view
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(document.querySelector('#mensagemView'));
        this._mensagemView.update(this._mensagem);

    }
    adiciona(event) {
        //se vc nao cancelar o comportamento padrao do form ele vai recarregar, e ai perder infos
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        
        this._mensagem.texto = 'Negociação adicionada';
        this._mensagemView.update(this._mensagem);
        
        this._limpaFormulario();
        console.log(this._listaNegociacoes.negociacoes);
    }

    apaga() {
        
        this._listaNegociacoes.esvazia();
        
        this._mensagem.texto = 'Negociacoes apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
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