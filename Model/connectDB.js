const mariadb = require('mariadb');

const pool=mariadb.createPool({
    host : 'localhost',
    user: 'root',
    database: 'ChatSystem',
    password: ' ',
    connectionLimit: 5
});

module.exports =pool;