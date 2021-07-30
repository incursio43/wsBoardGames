import mysql from 'mysql'
import { promisify } from 'util';

const pool = mysql.createPool({
    connectionLimit:10,
    host: 'localhost',
    user: 'root',
    password: 'KatKuroi030198',
    database: 'BoardGames'
})

pool.getConnection(function(error){
    if(error){
        throw error;
    } else {
        console.log('Conexion exitosa a la bd')
    }
});

pool.query = promisify(pool.query);

export default pool