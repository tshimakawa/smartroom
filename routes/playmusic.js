var express = require('express');
var router = express.Router();
const player = require('play-sound')();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/',function(req,res){
  'use strict';
  player.play('./public/sounds/Button/btn01.mp3', err => {
  	    if (err) {
  		    console.log(err);
  	    }
  });
});

module.exports = router;
