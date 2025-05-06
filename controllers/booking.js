const asyncHandler=require('express-async-handler')
const ErrorResponse=require('../utils/errorResponse')
const Activity=require('../models/Activity');
const Booking = require('../models/Booking');



// @desc   Book an activity
// @route  POST /api/v1/activity/:id/book
// @access Private

const bookActivity = asyncHandler(async (req, res, next) => {
    const activity = await Activity.findById(req.params.id);
  
    if (!activity) {
      return next(new ErrorResponse(`No activity with the id of ${req.params.id}`, 404));
    }
  
    // Check if already booked by this user
    const existingBooking = await Booking.findOne({
      activity: req.params.id,
      user: req.user.id,
    });
  
    if (existingBooking) {
      return next(new ErrorResponse('You have already booked this activity', 400));
    }
  
    const booking = await Booking.create({
      activity: req.params.id,
      user: req.user.id,
    });
  
    res.status(201).json({
      success: true,
      data: booking,
    });
  });
  
  





// @desc   Get all bookings
// @route  GET /api/v1/booking
// @access Private

const getBookings=asyncHandler(async(req,res,next)=>{

   
    const bookings=await Booking.find({user:req.user.id}).populate({
      path:'activity',
      select:'title description location'
    })

    if(bookings.length===0)
    {
        return next(new ErrorResponse(`No bookings found`,404))
    }

    res.status(200).json({
      success:true,
      count:bookings.length,
      data:bookings
    })


})

module.exports={
    bookActivity,
    getBookings,
}