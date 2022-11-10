const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')

const connection = mysql.createConnection(config)

const insert = `INSERT INTO people(name) values ('anizair')`
connection.query(insert)
connection.end()


app.get('/', (req, resp) =>{

    let connection = mysql.createConnection(config);

    let sql = `SELECT * FROM people`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      resp.send('<h1>Full Cycle Rocks!</h1> <br/> <p style="font-size: 25px;"style="font-size: 25px;"> ' + results[0].id + ' - ' + results[0].name + '</p>' )
    });
    
    connection.end();
});
 
app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})