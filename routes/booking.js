const express=require('express');
const router=express.Router();
const protect=require('../middleware/auth')
const {bookActivity,getBookings}=require('../controllers/booking')

router.route('/activity/:id/book').post(protect,bookActivity);
router.route('/booking').get(protect,getBookings)

module.exports=router;