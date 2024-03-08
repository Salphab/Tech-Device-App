const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const Connection = process.env.CONNECTION;
async function databaseconnection(req,res,next){
    try{
        await mongoose.connect(Connection);
    }
    catch(error){
        console.log(error)
    }
        next();
}

module.exports = databaseconnection;