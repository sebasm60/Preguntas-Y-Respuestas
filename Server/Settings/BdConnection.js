const mysql = require('mysql2');

const conection_mysql = mysql.createConnection({
    host: 'bn4hwksq4bwo2vaytc6a-mysql.services.clever-cloud.com',
    user: 'uxd9buy41ezwhvqe',
    password: 'QMyx5dKCyGmE4LlpIlL9',
    database: 'bn4hwksq4bwo2vaytc6a',
    port: '3306',
});

module.exports = {
    cnn_mysql: conection_mysql
};