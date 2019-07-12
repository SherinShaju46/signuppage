var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */


router.post('/', function(req, res) {
  let userName=req.body.uname;
  let passWord=req.body.password;
  res.render('output1');

});

module.exports = router;
