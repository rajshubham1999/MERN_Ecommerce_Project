const mongoose = require("mongoose")

const mondbUrl="mongodb+srv://Shubham221:Shubham1998@cluster0.9pnn9nr.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}