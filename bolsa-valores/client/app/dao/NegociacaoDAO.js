class NegociacaoDAO {
    
    constructor(connection) {
        this._connection = connection;
        //qual store esse DAO vai operar
        this._store = 'negociacoes';
    }

    adiciona(negociacao) {
        return new Promise((resolve, reject) => {
        
            //precisamos de uma transaction
            let transaction = this._connection.transaction([this._store], 'readwrite');
            let store = transaction.objectStore(this._store);
        
            //vamos pedir pra store gravar
            let request = store.add(negociacao);
            request.onsuccess = e => {
                //gravando somente as propriedades, nao grava metodos nem nada
                resolve();
            }

            request.onerror = e => {
                console.log(e.target.result.error);
                reject('Não foi possível adicionar a negociação');
            }
            
        });
    }


}