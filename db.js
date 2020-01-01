const mysql = require('mysql');

//local mysql db connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ion_sha'
});

connection.connect(err => {
  if (err) throw err;
  console.log('connected database');
});

module.exports = connection;
