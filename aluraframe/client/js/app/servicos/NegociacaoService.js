class NegociacaoService {
    //cb ==> callback
    obterNegociacoesDaSemana(cb) {
        let xhr = new XMLHttpRequest();

        //Aqui se fosse um web service, colocariamos o endereco do web service, como estamos com o servico local entao só
        //o caminho pra ele ja resolve
        xhr.open('GET','negociacoes/semana');

        //essa funcao vai ser chamada toda vez que o estado do XMLHttpRequest for alterado
        xhr.onreadystatechange = () => {
            //Estados possiveias de uma requisicao ajax
            /**
             * 0 -> Requisicao nao iniciada
             * 1 -> Conexao com o servidor estabelecida
             * 2 -> Requisicao recebida
             * 3 -> processando requisicao
             * 4 -> Requisicao concluida e resposta esta protna
             */
            if(xhr.readyState == 4) {
                //buscar os dados do servidor
                if(xhr.status == 200) {
                    console.log('Obtendo as negociacoes do servidor');
                    //aqui ele vai me dar oq o servidor retornou
                    //pra cada item do responseText vamos criar um objeto do tipo Negociacao
                    //depois de fazer o map e criar um novo array agora de negociacoes
                    //vamos atualizar a listaNegociacoes adicionando cada um dos elementos

                    //se deu tudo certo, nosso callback vai receber null como primeiro parametro indicando q nao teve erro
                    //e o segundo é a nossa lista de negociacao pronta pra ser iterada e adicionada na tabela
                    cb(null,JSON.parse(xhr.responseText).map(objeto => {
                        return new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor);
                    }));
                }else {
                    //callback chamando quando da erro e mandando pra view
                    cb('Não foi possível obter as negociações');
                    console.log(xhr.responseText);
                }
            }
        }
        xhr.send();
    }
}