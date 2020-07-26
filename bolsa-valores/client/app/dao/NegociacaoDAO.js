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

    listaTodos() {
        return new Promise((resolve, reject) => {
            let transaction = this._connection.transaction([this._store], 'readwrite');

            let store = transaction.objectStore(this._store);

            let negociacoes = [];
            //passeando pela object store com o ponteiro
            let iterator = store.openCursor();

            iterator.onsuccess = e => {

                //PONTEIRO para uma negociacao no banco
                let atual = e.target.result;
                if(atual) {
                    //essa é a negociacao real
                    let dado = atual.value;

                    //como queremeos uma instancia de vdd de Negociacao precisamos criar uma a partir
                    //dos dados que recebemos do ponteiro, aqui usamos o _ pq lembre-se nao temos nenhum metodo aqui.
                    //logo nao conseguimos usar get ou set
                    negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor));

                    //e ai continua iterando atee nao ter mais
                    atual.continue();
                }else{
                    //quando entrar aqui significa que o cursor terminou de varrer os dados entao agora temos nosso array
                    //pronto pra listar
                    console.log(negociacoes);
                    resolve(negociacoes);
                }
            }
            iterator.onerror = e => {
                console.log(e.target.error);
                reject('Não foi possível listar as negociacões');
            }
        });
    }

    apagaTodos() {
        return new Promise((resolve, reject) => {
            let request = this._connection
                        .transaction([this._store], 'readwrite')
                        .objectStore(this._store)
                        .clear();

            request.onsuccess = e => resolve("Negociações apagadas com sucesso");

            request.onerror = e => {
                console.log(e.target.error);
                reject("Erro ao apagar negociações");
            };
        });
    }

}