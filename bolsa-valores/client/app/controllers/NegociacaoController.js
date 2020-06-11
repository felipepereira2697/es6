class NegociacaoController{

    //para evitar percorrer o dom muitas vezes vamos colocar quantidade, valor e data como atributos da controller
    constructor() {
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputData       = document.querySelector('#data');
        this.inputValor      = document.querySelector('#valor');

    }
    adiciona(event) {
        //se vc nao cancelar o comportamento padrao do form ele vai recarregar, e ai perder infos
        event.preventDefault();
        
        console.log(this.inputData.value);
        console.log(this.inputValor.value);
        console.log(this.inputQuantidade.value);
    }
}