const mongoose = require('mongoose');

const Quiz = new mongoose.Schema({
  quizID: {
    type: String,
    required: true,
    unique: true
  },
  














subject:{
  type: String,
  require: true

},
totalMarks:{
  type: Number,
  require: true, 

},
totalQuestion:{
  type: Number,
  require:true
},
















  duration: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: "active"
  }
});

module.exports = mongoose.model('Quiz', Quiz, 'Quiz');
