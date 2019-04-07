//Call dependencies

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());

app.listen(4000, console.log('Listening to APP on PORT 4000'));