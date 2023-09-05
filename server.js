const express = require('express')
const productRouter = require('./routes/product') 
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')


const app = express();

connectDB();
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({limit: '100'}))


//route 1
app.use('/api',productRouter)



app.listen(5000,() => console.log('server is running on port 5000'))