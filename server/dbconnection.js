var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '8889',
  database: 'namedatabase'
});
module.exports = connection;