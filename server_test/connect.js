let mysql = require('mysql');

let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'newApp'
})
connection.connect(function(error){
    if(error){
        return console.error('Error: ' + error.message);
    }else{
        console.log('Connected!')
    }
});
/* var pool = mysql.createPool({
    connectionLimit: 5,
    host:'localhost',
    password:'password',
    user:'root',
    database:'newApp'
});
pool.getConnection(function(err, connection) {
    // execute query
    // ...
    connnection.release(); // Releasing back to the pool, ready to use again by someone else
  });
  pool.end(function(error) {
    if (error) {
      return console.log(errot.message);
    }
    // close all connections
  }); */
//connection.destroy();
//connection pools: cachen van database connecties => Om deze te hergebruiken + verhoogd de performantie 
// Pools zijn minder kostelijk: anders elke keer nieuwe connectie per gebruiker opzetten
//Pages that use connection pooling, on the other hand, maintain open connections in a pool. When the page requires access to the database, 
//it simply uses an existing connection from the pool, and establishes a new connection only if no pooled connections are available. 

let creatTable = `create table if not exists test
(id int primary key auto_increment, 
    title varchar(255) not null, 
    completed tinyint(1) not null default 0)`;
connection.query(creatTable,function(error,results,fields){
    if(error){
        console.log(error.message);
    }
})

connection.end(function(error){
    if(error){
        console.log(error.message);
    }
})