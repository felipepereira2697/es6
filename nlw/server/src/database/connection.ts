import knex from 'knex';
//para trabalhar com caminhos no node podemos usar a lib default chamada path
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection : {
        filename : path.resolve(__dirname, 'database.sqlite')
    }
})

export default connection;