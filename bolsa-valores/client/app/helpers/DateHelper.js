class DateHelper {
    textoParaData(texto) {
         //recebe um array ano, mes e dia
        //quando usa o spread significa q ele tem que ser desmembrado
        return new Date(...texto
                        .split('-')
                        .map((item, index) => {
                        if(index === 1){
                            //aqui é uma string mas o javascript faz o cast implicito
                            return item - 1;
                        }
                        return item;
                    })
        );
    }

    dataParaTexto(data) {
        return data.getDate() + '/'+(data.getMonth()+1)+'/'+data.getFullYear();
    }
}