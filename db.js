var mysql      = require('mysql');
var connect = function(){
    var connection = mysql.createConnection({
    host     : 'inspired.ua:3306',
    user     : 'snt7_user',
    password : 'Hizjsr3R',
    database : 'snt7_db'
    });

    connection.connect();
    return connection;    
}
module.exports.connect = connect;