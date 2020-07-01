class HttpService {

    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
    
            //aqui vai o endereco do servico na web
            xhr.open('GET', url);
            
            //toda vez q o estado da req ajax mudar
            xhr.onreadystatechange = () => {
    
                //req concluida
                if(xhr.readyState == 4) {
    
                    //operacao feita com sucesso
                    if(xhr.status == 200) {
                        console.log('requisicao concluida com sucesso');
                        let parsedResponse = JSON.parse(xhr.responseText);
                        resolve(parsedResponse)
                        
                    }else{
                        console.log('erro na requisicao '+xhr.responseText);
                        reject(xhr.responseText);
                    }
                }
    
            };
    
            xhr.send();
        })
    }
}