
class MensagemView extends View {

    constructor(elemento) {
        //quando queeremos que o construtor da classe mae seja executada, devemos usar o super
        super(elemento);
        
    }
    template(model) {
        //string sem conteudo é avaliada como false
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }



}