const ErrorResponse = require("../utils/errorResponse")

//Catches our errors as it will be the last middleware
const errorHandler = (err, req, res, next) => {
  // Log to console for

  // ******* We copied out the error object
  let error = { ...err}  //

  error.message  = err.message

  console.log(err) 

  // Mongoose bad ObjectID i.e totally wrong id
  if(err.name === 'CastError') {
    const message = `Bootcamp not found with id of ${err.value}`
    error = new ErrorResponse(message , 404) 
  }


  // Mongoose Duplicate key customizing error checker
  if (err.code === 11000) {
    const message = 'Duplicate field value entered'
    error = new ErrorResponse(message, 400)
  }

  //Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message)
    error = new ErrorResponse(message, 400);
    console.log('YESSSSSSSS')
  }

  res.status(error.statusCode || 500).json({
    success:false,
    error: error.message || 'Server Error'
  })
}

module.exports = errorHandler