class NegociacaoController {

    constructor() {
         /*
            o querySelector na variável $ para criarmos um alias. Por que não funcionou? 
            O querySelector é uma função que pertence ao objeto document - chamaremos tal função de método. 
            Internamente, o querySelector tem uma chamada para o this, que é o contexto pelo qual o método é chamado. 
            Logo, o this é o document. No entanto, quando colocamos o querySelector dentro do $, ele passa a ser executado fora
             do contexto de document e isto não funciona. O que devemos fazer, então? 
             Queremos tratar o querySelector como uma função separada. Nós queremos que ao colocarmos o querySelector para o $, 
             ele mantenha a associação com o document. Para isto, usaremos o bind() :
        
        */
       let $ = document.querySelector.bind(document);
       this._inputDate = $("#data"); 
       this._inputQuantidade = $("#quantidade");
       this._inputValor = $("#valor");

       let self = this;
       this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
        //Interceptar uma operacao de leitura para executar determinada acao
        get(target, prop, receiver) {
            //Se o metodo que to interceptando é adiciona ou esvazia
            if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
                 //Substituindo o metodo do Proxy por uma function
                 return function() {
                     //ou seja se vc tiver chamando o metodo adiciona do Proxy na verdade vc ta chamando esse metodo aqui
                     console.log(`interceptando ${prop}`);
                     //usando o self pra usar o this corretamente
                     //entao precisamos passar os parametros que o nosso metodo real precisaria no caso uma negociacao
                     //vamos fazer usando o objeto implicito arguments junto com a api de Reflect
                     //o arguments da acesso a todos os parametros da funcao quando ela é chamada.
                     console.log('--> ',this);
                     
                     Reflect.apply(target[prop], target,arguments);
                     //Chamo a atualizacao da view só depois de aplicar o valor correto
                     self._negociacoesView.update(target);
                     console.log(arguments);
                 }
            }
            return Reflect.get(target,prop,receiver);
            }
        });

       //O escopo do this de uma arrow function é lexico ele nao é dinamico igual o escopo de uma function
       //ele nao muda de acordo com contexto o this na arrow function abaixo é NegociacaoController e nao ListaNegociacoes
       //como seria o caso da function
    //    this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model) );
       this._negociacoesView = new NegociacoesView($("#negociacoesView"));
       //para fazer a primeira renderizacao 
       this._negociacoesView.update(this._listaNegociacoes);
       this._mensagem = new Mensagem();
       this._mensagemView = new MensagemView($("#mensagemView"));
       this._mensagemView.update(this._mensagem);

    }
    adiciona(event) {
        event.preventDefault();
       
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = "Negociação adicionada com sucesso";
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
        
    }
    apaga() {
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = 'Negociacoes apagadas com sucesso';
        this._mensagemView.update(this._mensagem);

    }
    /*Só a classe pode chamar esses metodos com _ */
    _criaNegociacao() {
         
        return  new Negociacao(
                    DateHelper.textoParaData(this._inputDate.value),
                    this._inputQuantidade.value,
                    this._inputValor.value
                    )
    }
    _limpaFormulario() {
        this._inputDate.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0';

        this._inputDate.focus();
    }
}