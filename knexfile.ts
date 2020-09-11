import path from 'path';
import connection from './src/database/connection';

module.exports = {
    client: 'sqlite3' ,
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'dados.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
}