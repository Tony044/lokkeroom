import mariadb from 'mariadb';

const pool=mariadb.createPool({
    host : 'localhost',
    user: 'root',
    database: 'ChatSystem',
    password: '250303',
    connectionLimit: 5
});

export default pool;