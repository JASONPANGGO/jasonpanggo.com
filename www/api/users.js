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
        res.send(users)
    })
})

module.exports = router