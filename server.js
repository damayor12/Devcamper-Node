const express = require('express')
const dotenv = require('dotenv')
const res = require('express/lib/response')
const morgan = require('morgan')
// const logger = require('./middleware/logger')

//Route files
const bootcamps = require('./routes/bootcamps')

// Load our env vars
dotenv.config({path: './config/config.env'})
const app = express()

//Dev logging midddleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}


//app.use(logger)

//Mount routers
app.use('/api/v1/bootcamps', bootcamps)




const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} MODE on port ${PORT}`)
  )
 