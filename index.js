require('dotenv').config();
require('./database/connection'); //Database connection 

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.json()); //Allows express to exchange data by json 
app.use(express.urlencoded({extended: true})); //Allows express to send data
app.use('/public', express.static(path.join(__dirname, 'public'))); //Base url
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    const data = {
        name: 'Diego salinas',
        age: 20
    }

    res.render('index', {data});
});

app.listen(port, () => console.log(`Server running on port ${port}`));

