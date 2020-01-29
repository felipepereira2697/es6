class MensagemView extends View{
    constructor(elemento) {
        //passando pro constructor pai
        super(elemento);
    }
    _template(model) {
        //Em JS uma string sem conteudo é avaliada como falso
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }
    
}