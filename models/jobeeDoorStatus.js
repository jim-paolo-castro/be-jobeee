const mongoose = require('mongoose');
const crypto = require('crypto');

const jobeeDoorTransSchema = new mongoose.Schema(
    { 
      doorNumber: {
      type: String,
    },
      doorStatus: {
      type: Boolean,
    },
      DateCreated:{
      type:Date
    },
    },
    { timestamp: true }
);

module.exports = mongoose.model('jobeeDoorTransaction', jobeeDoorTransSchema);
