const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://ServerAPI:1234@cluster0.ia23hnt.mongodb.net/?retryWrites=true&w=majority')
        console.log('BD connected')
    } catch(err){
       console.log(err)
    }
}

module.exports = connectDB 