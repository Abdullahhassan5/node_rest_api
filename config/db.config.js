const mysql = require('mysql')


const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'node_mysql_crud_db'
});
dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
})
module.exports = dbConn  ;