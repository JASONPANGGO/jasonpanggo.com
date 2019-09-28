const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/jasonpanggo'
mongoose.connect(dbURL);

const db = mongoose.connection;

const Schema = mongoose.Schema;

var usersSchema = new Schema({
    id: String,
    name: String
})

var Users = mongoose.model('Users', usersSchema)

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', e => {
    console.log('MongoDB is connected successfully on ' + dbURL)
})

module.exports = {
    db,
    Users
}