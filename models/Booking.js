const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  activity: {
    type: mongoose.Schema.ObjectId,
    ref: 'Activity',
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  }
});

const bookingModel= mongoose.model('Booking', bookingSchema);
module.exports=bookingModel;