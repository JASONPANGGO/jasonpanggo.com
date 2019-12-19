const express = require('express')
const router = express.Router()

const {
    db,
    Users
} = require('../db')

db.on('error', console.error.bind(console, 'connection error:'));

router.get('/test', (req, res) => {
    
    res.send('get users OK')
})

router.get('/list', (req, res) => {
    Users.find(function (err, users) {
        if (err) return console.error(err)
        console.log(users)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(users)
    })
})

router.options('/submit', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Accept, Origin, XRequestedWith, Content-Type, LastModified')
    res.send('options ok')
})

router.post('/submit', (req, res) => {
    let user = new Users({
        name: req.body.name,
        score: req.body.score,
        location: req.body.location,
        time: new Date().toLocaleString()
    })
    user.save().then(ret => {
        console.log(ret)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send('ok')
    })
})

module.exports = router