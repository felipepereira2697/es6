class Mensagem {
    //No ES6 se eu nao passar nada ele vai adotar como padrao a string em branco ''
    constructor(texto='') {
        this._texto = texto;
    }

    get texto() {
        return this._texto;
    }
    set texto(texto) {
        this._texto = texto;
    }
}