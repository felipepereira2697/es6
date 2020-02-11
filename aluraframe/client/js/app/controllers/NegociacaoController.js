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
       this._negociacoesView = new NegociacoesView($("#negociacoesView"));
       this._listaNegociacoes = new Bind(new ListaNegociacoes(),this._negociacoesView,'adiciona', 'esvazia');
       //O escopo do this de uma arrow function é lexico ele nao é dinamico igual o escopo de uma function
       //ele nao muda de acordo com contexto o this na arrow function abaixo é NegociacaoController e nao ListaNegociacoes
       //como seria o caso da function
    //    this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model) );
       
       
       this._mensagemView = new MensagemView($("#mensagemView"));
       this._mensagem = new Bind(new Mensagem(), this._mensagemView,'texto');
       

    }
    adiciona(event) {
        event.preventDefault();
       
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = "Negociação adicionada com sucesso";
        //this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
        
    }
    importaNegociacoes(event) {
        let xhr = new XMLHttpRequest();

        //Aqui se fosse um web service, colocariamos o endereco do web service, como estamos com o servico local entao só
        //o caminho pra ele ja resolve
        xhr.open('GET','negociacoes/semana');

        //essa funcao vai ser chamada toda vez que o estado do XMLHttpRequest for alterado
        xhr.onreadystatechange = () => {
            //Estados possiveias de uma requisicao ajax
            /**
             * 0 -> Requisicao nao iniciada
             * 1 -> Conexao com o servidor estabelecida
             * 2 -> Requisicao recebida
             * 3 -> processando requisicao
             * 4 -> Requisicao concluida e resposta esta protna
             */
            if(xhr.readyState == 4) {
                //buscar os dados do servidor
                if(xhr.status == 200) {
                    console.log('Obtendo as negociacoes do servidor');
                    
                }else {
                    console.log('Nao foi possivel obter as negociacoes do servidor');
                }
            }
        }
        xhr.send();
    }
    apaga() {
        this._listaNegociacoes.esvazia();

        this._mensagem.texto = 'Negociacoes apagadas com sucesso';
        

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