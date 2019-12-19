const mongoose = require('mongoose');
const dbURL = 'mongodb://129.211.122.221:27017/jasonpanggo'
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

const Schema = mongoose.Schema;

var usersSchema = new Schema({
    id: String,
    name: String,
    score: Number,
    time: String
}, {
    collection: 'game2048'
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