const express = require('express')
const dotenv = require('dotenv')
const res = require('express/lib/response')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')
// const logger = require('./middleware/logger')

// Load our env vars
dotenv.config({path: './config/config.env'})



// Connect to database
connectDB()


//Route files
const bootcamps = require('./routes/bootcamps')


const app = express();

//Body parser
app.use(express.json())

//Dev logging midddleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


//app.use(logger)

//Mount routers
app.use('/api/v1/bootcamps', bootcamps)




const PORT = process.env.PORT || 5000

const server  = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} MODE on port ${PORT}`.yellow.bold)
  )

  // Handle unhandled promise rejections in db
process.on('unhandledRejection', (err, promise) => {
  console.log(`The ERROR IS: ${err.message}`.red)

  server.close(()=> process.exit(1)) //1 is a code for exiting with failure
})

 