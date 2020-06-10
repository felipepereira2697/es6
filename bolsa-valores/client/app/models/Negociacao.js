class Negociacao {

    //atributos sao definidos atraves do construtor
    constructor(data, quantidade, valor){
        this.data = data
        this.quantidade = quantidade;
        this.valor = valor;
    }

    volume() {
        return this.quantidade * this.valor;
    }
}