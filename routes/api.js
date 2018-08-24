const express = require('express');
const mongoose = require('mongoose');
const Users = require('../models/users');
const router = express.Router();

mongoose.connect('mongodb://lena:lena123@ds129541.mlab.com:29541/appointment', { useNewUrlParser: true }, (err) => {
    err ? console.log(err) : console.log('Connected to DB');
});

router.get('/', (req, res) => {
    Users.find({}).exec((err, data) => {
        err ? console.log(err) : res.send(data);
    });
});

router.post('/register', (req, res) => {
    const data = new Users({firstname: req.body.firstname, lastname: req.body.lastname, phone: req.body.phone});
    data.save((err, registeredUser) => {
        err ? console.log(err) : res.json(registeredUser);
    });
})

router.post('/login', (req, res) => {
    const data = req.body;
    Users.findOne({firstname: data.firstname}, (err, user) => {
        if (err) console.log(err)
        else if (!user) res.status(401).send('לא נמצא השם במאגר')
        else if (user.lastname !== data.lastname) res.status(401).send('שם משפחה לא קיים')
        else {
            res.status(200).send(user);
        }
    });
});


module.exports = router;