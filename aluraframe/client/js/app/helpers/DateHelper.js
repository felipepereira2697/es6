class DateHelper {
    //Como a classe nao pode ser instanciada pq nao faz sentido, no construtor vamos lancar uma exception
    constructor() {
        throw new Error('DateHelper não pode ser instanciada');
    }   
    //Como aqui nao temos propriedade nao instanciamos nada, nao usamos constructor customizado, esses metodos de helper
    //fazem sentido ser static
    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw new Error('Deve estar no formato ano mes dia aaaa/mm/dd');
        }
         //Podemos usar o spread operator, assim quando passamos um array pra dentro de um metodo ele entende
        //que a primeira posicao do array é o primeiro parametro da funcao e assim por diante

        /*
            Podemos usar arrow function no caso do map e quando temos somente UMA instrucao
            podemos emitir as chaves do bloco bem como a palavra return
        */

        return new Date(...texto.split('-')
                    .map((item, indice) => indice == 1 ? item - 1: item));
    }
    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
        
    }
}