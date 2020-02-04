const express = require('express');
const port = process.env.port || 4000;

const routes = require('./routes');

//Set up express app
const app = express();


//Get database connection

const database = require('./connection/connection');
database.seq.authenticate().then( () => {

    console.log('Database connection successfuly');
}).catch( (error) => {

    console.log('Database connection unsuccessful - \r' + error);
})


//Route using routers

app.use('/', routes);


//Listen on port 4000
app.listen(3000, function() {

    console.log('Listening for requests on port ' + port)
})

