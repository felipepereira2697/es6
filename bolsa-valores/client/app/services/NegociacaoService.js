class NegociacaoService {


    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

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
    
                        resolve(parsedResponse
                        .map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));
                        
                    }else{
                        console.log('erro na requisicao '+xhr.responseText);
                        reject('Não foi possível importar as negociações da semana, erro na requisição ao servidor');
                    }
                }
    
            };
    
            xhr.send();
        });
    }
    obterNegociacoesDaSemanaAnterior() {
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
    
            //aqui vai o endereco do servico na web
            xhr.open('GET', 'negociacoes/anterior');
            
            //toda vez q o estado da req ajax mudar
            xhr.onreadystatechange = () => {
    
                //req concluida
                if(xhr.readyState == 4) {
    
                    //operacao feita com sucesso
                    if(xhr.status == 200) {
                        console.log('requisicao concluida com sucesso');
                        let parsedResponse = JSON.parse(xhr.responseText);
    
                        //minha funcao aqui de callback
    
                        resolve(parsedResponse
                        .map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));
                        
                    }else{
                        console.log('erro na requisicao '+xhr.responseText);
                        reject('Não foi possível importar as negociações da semana anterior, erro na requisição ao servidor');
                    }
                }
    
            };
    
            xhr.send();
        });
    }


    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
    
            //aqui vai o endereco do servico na web
            xhr.open('GET', 'negociacoes/retrasada');
            
            //toda vez q o estado da req ajax mudar
            xhr.onreadystatechange = () => {
    
                //req concluida
                if(xhr.readyState == 4) {
    
                    //operacao feita com sucesso
                    if(xhr.status == 200) {
                        console.log('requisicao concluida com sucesso');
                        let parsedResponse = JSON.parse(xhr.responseText);
    
                        //minha funcao aqui de callback
    
                        resolve(parsedResponse
                        .map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));
                        
                    }else{
                        console.log('erro na requisicao '+xhr.responseText);
                        reject('Não foi possível importar as negociações da semana retrasada, erro na requisição ao servidor');
                    }
                }
    
            };
    
            xhr.send();
        });
    }
}