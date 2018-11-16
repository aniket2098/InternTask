var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var validate = require('./validate.js');

var app = express();

app.use(bodyParser.json());

app.post('/register', (req, res) => {

  var user = new User({
    name: req.body.name,
    year: req.body.year,
    college: req.body.college    
  });

  user.save().then((doc) => {

    var query = User.find({name: user.name});
    query.exec((err,result) => {
      res.send(validate.validate(user,result[0]));
    })
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};