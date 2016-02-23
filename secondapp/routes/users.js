var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var userSchema = mongoose.Schema({
  name: String,
  app: String

});

// User ---> users
var User = mongoose.model('User',userSchema);


/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // db.users.find() en mongo
  // Modelo metodo find({}, Function(err,Collecion))
  User.find({}, function(err,users){
    var userMap = [];

    users.forEach(function(user){
      userMap.push(user);
    });
      res.send(userMap);
  });
});

module.exports = router;
