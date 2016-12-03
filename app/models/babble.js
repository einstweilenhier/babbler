'use strict';

const mongoose = require('mongoose');

const babbleSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  content: String,
  image: {
    data: Buffer,
    contentType: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Babble = mongoose.model('Babble', babbleSchema);
module.exports = Babble;