const mongoose=require('mongoose');

const activitySchema = new mongoose.Schema({
    title: {
      type: String,
      trim: true,
      required: [true, 'Please add an activity title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    location: {
      type: String,
      required: [true, 'Please add a location'],
    },
    dateTime: {
      type: Date,
      required: [true, 'Please add a date and time'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  }, {
    timestamps: true,
  });
  
  const activityModel = mongoose.model('Activity', activitySchema);
  module.exports = activityModel;