const express = require('express')
const app = express()
const http = require('http').createServer(app)
const PORT = 3100
const users = require('./www/api/users')
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 
app.use(bodyParser.json());

app.use('/users', users);

http.listen(PORT, () => {
    console.log(`the express server is listening on ${PORT}`)
})