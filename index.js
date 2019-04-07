//Call dependencies

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'foodindex_db'
});

connection.connect((err) => {
  if (err) {
    return err;
  }
});

const app = express();

app.use(cors());

app.listen(4000, console.log('Listening to APP on PORT 4000'));