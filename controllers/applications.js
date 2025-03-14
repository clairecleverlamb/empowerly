const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// build application index page
router.get('/', (req, res) => {
    res.send("Hello application index route!");
});

router.get('/', async (req, res) => {
    try {
      res.render('applications/index.ejs');
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
})

router.get('/new', async (req, res) => {
    res.render('applications/new.ejs');
});

module.exports = router;