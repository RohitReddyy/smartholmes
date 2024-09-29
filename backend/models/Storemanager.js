const mongoose = require('mongoose');
const { Schema } = mongoose;

const StoremanagerSchema = new Schema({
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
  const Storemanager = mongoose.model('storemanager', StoremanagerSchema);
  module.exports = Storemanager;    