var stores = ['negociacoes'];
var version = 3;
var dbName = 'bolsavalores';
class ConnectionFactory {
 
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
                resolve(e.target.result);
            }
            openRequest.onerror = e => {
                console.log(e.target.error);
                reject(e.target.error.name);
            }
        })
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