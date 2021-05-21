

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Princess199432",
    database: "mydb_05_19"
})
    
//creating the DB - mydb_05_19
//connection.query("CREATE DATABASE mydb_05_19")

// const sql = `CREATE TABLE users(
//     id int primary key auto_increment,
//     name varchar(255) not null,
//     age int not null,
//     qa varchar(120) not null
// )`;

//const sql_one_row_data = `INSERT INTO users(name, age, qa) VALUES('Tom', 230, 'no')`
// const user_data = [
//     ['Jerry', 40, 'yes'],
//     ['Jeff', 30, 'no'],
//     ['Anna', 20, 'yes']
// ]

//const sql_multiple_row_data = `INSERT INTO users(name, age, qa) VALUES ?`

// const sql_receive_data = `SELECT * FROM users`;
// connection.execute(sql_receive_data, function(err, results) {
//     if (err) console.error(err);
//     console.log(results);
// })

const sql_receive_specific_data = `SELECT * FROM users WHERE name = ?`;
connection.query(sql_receive_specific_data, 'Anna', function(err, results) {
    if (err) console.error(err);
    console.log(results);
})

//connection.query(sql_multiple_row_data, [user_data]);

connection.end(function(err) {
    if (err) {
        return console.error('not connect');
    } else {
        console.log('success');
    }
})