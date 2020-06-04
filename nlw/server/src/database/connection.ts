import knex from 'knex';
//para trabalhar com caminhos no node podemos usar a lib default chamada path
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection : {
        filename : path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

//Migrations --> Historico do banco de dados
export default connection;