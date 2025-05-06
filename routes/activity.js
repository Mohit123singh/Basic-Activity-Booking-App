const express=require('express');
const router=express.Router();
const {getActivities}=require('../controllers/activity')
router.route('/').get(getActivities)


module.exports=router;