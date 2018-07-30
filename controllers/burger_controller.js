const express = require('express');
const burger = require('../models/burger')
const router = express.Router();

// GET ROUTE TO DISPLAY INDEX PAGE WHEN INITIAL APP LOADS
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Welcome to Burger-Land'
    });
});

// SELECTALL FUNCTION RUNNING FROM ORM
router.get('/burgers', function (req, res) {
    burger.selectAll(function (data) {
        res.render('index', { data: data });
    });
});

// INSERTONE POST ROUTE
router.post('/burgers/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect('/');
    });
});

// PUT ROUTE FOR UPDATING SQL
router.put('/burgers/:id', function (req, res) {
    burger.updateOne(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;