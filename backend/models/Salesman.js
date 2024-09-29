const mongoose = require('mongoose');
const { Schema } = mongoose;

const SalesmanSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const Salesman = mongoose.model('salesman', SalesmanSchema);
  module.exports = Salesman;    