// Prints "GET http://localhost:5000/api/v1/bootcamps/""

const logger = (req, res, next) => {
  req.hello = 'Hello World';
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
};

module.exports = logger
 