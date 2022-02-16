const mongoose = require('mongoose')

const connectDB = async () => {

  //try catch was supposed to be used, because async
  //a global handler was instead implemneted 
  const conn = await mongoose.connect(process.env.MONGO_URI
  //   , {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  //   useFindAndModify: false,
  //   useUnifiedTopology: true 
  // }
  )


  console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline.bold)
} 

module.exports = connectDB