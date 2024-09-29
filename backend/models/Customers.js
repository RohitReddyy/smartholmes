const mongoose = require('mongoose');
const { Schema } = mongoose;

const CustomerSchema = new Schema({
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
  const Customer = mongoose.model('customer', CustomerSchema);
  module.exports = Customer;    