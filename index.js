//Require NPM packages
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

//Create app with NPM Package Express
const app = express();

//Use NPM Package Cors
app.use(cors());

//Connect to MySQL Database with NPM Package mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'foodindex_db'
});

//Create Query to show data
const SELECT_ALL_FOODINDEX_QUERY = 'SELECT * FROM foodindex';

//Test connection
connection.connect((err) => {
  if (err) {
    return err;
  }
});

//Show data on browser "localhost:4000/"
app.get('/', (req, res) => {
  connection.query(SELECT_ALL_FOODINDEX_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  })
})

//Listen to server
PORT = 4000;

app.listen(PORT, console.log(`Listening to server on PORT ${PORT}`));