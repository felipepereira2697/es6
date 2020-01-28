class DateHelper {
    textoParaData(texto) {
         //Podemos usar o spread operator, assim quando passamos um array pra dentro de um metodo ele entende
        //que a primeira posicao do array é o primeiro parametro da funcao e assim por diante

        /*
            Podemos usar arrow function no caso do map e quando temos somente UMA instrucao
            podemos emitir as chaves do bloco bem como a palavra return
        */
        return new Date(...texto.split('-')
                    .map((item, indice) => indice == 1 ? item - 1: item));
    }
    dataParaTexto(data) {
        return data.getDate() + '/'+(data.getMonth()+1) + '/'+data.getFullYear();
    }
}