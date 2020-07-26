class NegociacaoController{

    //para evitar percorrer o dom muitas vezes vamos colocar quantidade, valor e data como atributos da controller
    constructor() {
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputData       = document.querySelector('#data');
        this._inputValor      = document.querySelector('#valor');

        this._negociacoesView = new NegociacoesView(document.querySelector('#negociacoesView'));
        this._mensagemView = new MensagemView(document.querySelector('#mensagemView'));

        //Aqui deixamos explicito que queremos fazer uma associacao entre os dados e a view
        //e essa associacao ocorrerá quando iniciarmos a primeira vez e toda vez que uma das propriedades
        //da  view seja alterada, podendo ser metodo ou propriedade quando acessadas
        this._listaNegociacoes  = new Bind(new ListaNegociacoes(), this._negociacoesView, 'adiciona', 'esvazia');

        //conseguimos passar 'texto' ao inves de ['texto'] gracas ao REST OPERATOR
        this._mensagem = new Bind(new Mensagem(), this._mensagemView, 'texto');

        //vamos listar tudo assim q a aplicacao comecar
        ConnectionFactory.getConnection()
        //retorno implicito
        .then(connection => new NegociacaoDAO(connection))
        .then(dao => dao.listaTodos())
        .then(negociacoes => {
            negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao);
            })
        })
        .catch(erro => {
            console.log(erro);
            this._mensagem.texto = erro;
        });

    }
    adiciona(event) {
        //se vc nao cancelar o comportamento padrao do form ele vai recarregar, e ai perder infos
        event.preventDefault();

        ConnectionFactory.getConnection()
        .then(connection => {
            let negociacao = this._criaNegociacao();
            new NegociacaoDAO(connection).adiciona(negociacao)
            .then(() => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = 'Negociação adicionada';
                this._mensagemView.update(this._mensagem);
                
                this._limpaFormulario();
            })
        })
        .catch(erro => {
            this._mensagem.texto = erro; 
        });
        console.log(this._listaNegociacoes.negociacoes);
    }

    apaga() {
        ConnectionFactory.getConnection()
        .then(connection => new NegociacaoDAO(connection))
        .then(dao => dao.apagaTodos())
        .then(mensagem => {
            this._mensagem.texto = mensagem;
            this._listaNegociacoes.esvazia();
        })
        
        
    }
    //metodos privado
    _criaNegociacao() {
        return new Negociacao(DateHelper.textoParaData(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
    }
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    importaNegociacoes() {
        let service = new NegociacaoService();

        Promise.all([service.obterNegociacoesDaSemana(),
                    service.obterNegociacoesDaSemanaAnterior(),
                    service.obterNegociacoesDaSemanaRetrasada()])
                    .then(negociacoes => {
                        //como a promise volta 3 arrays distintos, podemos achatar usando reduce
                        negociacoes
                        .reduce((arrayAchatado, array) => arrayAchatado.concat(array),[])
                        .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));

                        this._mensagem.texto = 'Negociações importadas com sucesso';
                    })
                    .catch(erro => {
                        this._mensagem.texto = erro;
                    });
        
    }



}