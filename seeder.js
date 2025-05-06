const fs=require('fs');
const mongoose=require('mongoose');
const colors=require('colors');
const dotenv=require('dotenv');

//load env vars
dotenv.config({path:'./config/config.env'});

// Load Models :
const User=require('./models/User')
const Activity=require('./models/Activity')


// Connect to DB
mongoose.connect(process.env.MONGO_URI);

//Read Json Files :
const users=JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`,'utf-8'))
const activities=JSON.parse(fs.readFileSync(`${__dirname}/_data/activities.json`,'utf-8'))

// Import into DB

const importData=async()=>{
    try{

       await User.create(users);
       await Activity.create(activities)
       console.log(`Data Imported......`.green.inverse)
       process.exit(0);
    }catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}

// Delete Data

const deleteData=async()=>{
    try{
     
       await User.deleteMany();
       await Activity.deleteMany();
      
       console.log(`Data Destroyed......`.red.inverse)
       process.exit(0);
    }catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}

if(process.argv[2]==='-i')
{
    importData();
}
else if(process.argv[2]==='-d')
{
    deleteData();
}