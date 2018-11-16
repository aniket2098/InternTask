var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  year: {
    type: String,
    required: true,
    trim:true,
    validate: {
      validator: (value) => {
        return (value=='FE' || value=='SE' || value=='TE' || value=='BE')
      },
      message: 'Invalid Year'
    }
  },
  college: {
    type:String,
    required: true,
    trim: true,
    validate: {
      validator: (value) => {
        return (value=='VIIT' || value=='PICT')
      },
      message: 'Invalid College'
    }
  }
});

module.exports = {User}
