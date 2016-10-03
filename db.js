var mysql      = require('mysql');
var connect = function(){
    var connection = mysql.createConnection({
    host     : '193.169.188.191',
    user     : 'snt7_user',
    password : 'Hizjsr3R',
    database : 'snt7_db'
    });

    connection.connect();
    return connection;    
}
module.exports.connect = connect;