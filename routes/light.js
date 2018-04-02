var express = require('express');
var router = express.Router();
const exec = require('child_process').exec;

router.post('/turnon',function(req,res){
  res.send("success");

  exec('irsend SEND_ONCE smartroom LightON', function(err, stdout, stderr){
  	  if (err) { console.log(err); }
  	  console.log(stdout);
  });
});

router.post('/turnoff',function(req,res){
  res.send("success");

  exec('irsend SEND_ONCE smartroom LightOFF', function(err, stdout, stderr){
  	  if (err) { console.log(err); }
  	  console.log(stdout);
  });
});

module.exports = router;
