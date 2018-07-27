const express = require('express');
const burger = require('../models/burger')
const router = express.Router();

router.get('/', function (req, res){
    res.render('index', {
        title: 'Welcome to Burger-Land'
    })
})



module.exports = router;