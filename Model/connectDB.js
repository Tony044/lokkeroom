import mariadb from 'mariadb';

const pool=mariadb.createPool({
    host : 'localhost',
    user: 'root',
    database: 'ChatSystem',
    password: ' ',
    connectionLimit: 5
});

export default pool;