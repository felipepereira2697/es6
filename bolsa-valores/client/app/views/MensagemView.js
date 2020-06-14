class MensagemView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
        //string sem conteudo é avaliada como false
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}