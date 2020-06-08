const express = require('express');
const mongoose =  require('mongoose');


require('./configuration/Dbconnction');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', require('./routes/index'));
server.use('/material', require('./routes/material'));


const port = process.env.Port || 3000;
app.listen(port, () => {console.log(`Server started on port ${port}`)});