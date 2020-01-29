class MensagemView {
    constructor(elemento) {
        this._elemento = elemento;

    }
    _template(model) {
        //Em JS uma string sem conteudo é avaliada como falso
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }
    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}