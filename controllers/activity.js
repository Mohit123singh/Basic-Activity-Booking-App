const asyncHandler=require('express-async-handler')
const ErrorResponse=require('../utils/errorResponse')
const Activity=require('../models/Activity');
const Booking = require('../models/Booking');


// @desc   Get activities
// @route  GET /api/v1/activities
// @access Public


const getActivities=asyncHandler(async(req,res,next)=>{

    
    
    const activities=await Activity.find()
    if(activities.length===0)
    {
        return next(new ErrorResponse(`No activities found`,404))
    }
    res.status(200).json({
      success:true,
      count:activities.length,
      data:activities,
    })
    
})


module.exports={
    getActivities,
}
