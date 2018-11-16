var isEqual = require('json-is-equal');
var {User} = require('./models/user');
var {mongoose} = require('./db/mongoose');

var validate = (userData,result) => {

    console.log(result);
    if(isEqual(userData,result))
        return true
    else {
        userData.save().then((doc) => {
            var query = User.find({name: userData.name});
            query.exec((err, result) => {
                return (validate(userData,result[0]));    
            });
        }, (e) => {
            return false
        });    
    }
}

module.exports = {validate};