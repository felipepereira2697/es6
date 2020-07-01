class NegociacaoService {


    obterNegociacoesDaSemana(callback) {
        let xhr = new XMLHttpRequest();

        //aqui vai o endereco do servico na web
        xhr.open('GET', 'negociacoes/semana');
        
        //toda vez q o estado da req ajax mudar
        xhr.onreadystatechange = () => {

            //req concluida
            if(xhr.readyState == 4) {

                //operacao feita com sucesso
                if(xhr.status == 200) {
                    console.log('requisicao concluida com sucesso');
                    let parsedResponse = JSON.parse(xhr.responseText);

                    //minha funcao aqui de callback

                    callback(null, parsedResponse
                    .map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));
                    
                }else{
                    console.log('erro na requisicao '+xhr.responseText);
                    callback('Não foi possível importas as negociações, erro na requisição ao servidor', null);
                }
            }

        };

        xhr.send();
    }
}