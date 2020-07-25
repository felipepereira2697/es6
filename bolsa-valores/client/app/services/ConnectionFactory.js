//Criando uma IIFE, vai ser carregada e ao mesmo tempo será invocada
const ConnectionFactory = (function()  {

    const stores = ['negociacoes'];
    const version = 3;
    const dbName = 'bolsavalores';
    let connection = null;

    //vai guardar o metodo original
    let close = null;

    //podemos retornar ConnectionFactory para ter acesso 
    return class ConnectionFactory {
     
        //Evitar que criem instancias dessa classe
        constructor() {
            throw new Error('Não é possível criar instancias de ConnectionFactory');
        }
        static getConnection() {
            return new Promise((resolve, reject) => {
                let openRequest = window.indexedDB.open(dbName, version);
                openRequest.onupgradeneeded = e => {
                    ConnectionFactory._createStores(e.target.result);
                };
                openRequest.onsuccess = e => {
                    //aqui deu tudo certo
                    if(!connection) {
                        connection = e.target.result;

                        //a variavel close vai receber o metodo connection.close
                        //para evitar problema do this, vamos usar o bind para copiar a referencia correta
                        // o this desse cara sempre será a connection
                        close = connection.close.bind(connection);
                        connection.close = function() {
                            throw new Error('Você não pode fechar a conexão diretamente');
                        }
                    }
                    resolve(connection);
                }
                openRequest.onerror = e => {
                    console.log(e.target.error);
                    reject(e.target.error.name);
                }
            })
        }
        static closeConnection() {
            if(connection) {
                //chamando a nossa criacao de close 
                close();
                connection = null;
            }
        }
        static _createStores(connection) {
            stores.forEach((store) => {
                //se ja existe uma object store, deleta para criar uma nova
                if(connection.objectStoreNames.contains(store)) {
                    connection.deleteObjectStore(store);
                }
    
                //cria a store
                connection.createObjectStore(store, {autoIncrement : true});
            });
        }
    }
})();

