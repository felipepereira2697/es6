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

            };
            openRequest.onsuccess = e => {

            }
            openRequest.onerror = e => {

            }
        })
    }
}