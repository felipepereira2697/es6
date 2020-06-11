class DateHelper {
    
    constructor() {
        throw new Error('Você não pode instanciar a classe DateHelper');
    }

    static textoParaData(texto) {
        if(!(/\d{4}-\d{2}-\d{2}/.test(texto))) {
            throw new Error('Data deve estar no formato yyyy-mm-dd ');
        }
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

    static dataParaTexto(data) {
        let mes = (data.getMonth()+1);

        return `${data.getDate()}/${mes}/${data.getFullYear()}`;
    }
}