class View {
    constructor(elemento) {
        this._elemento = elemento;
    }
    template(model) {
        throw new Error('Template deve ser implementado pela classe filho');
    }
    update(model){
        this._elemento.innerHTML = this.template(model);
    }

}